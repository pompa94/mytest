


// import $ from 'jquery';

// node_moduler -> 확장자 , 경로 X

// $(function(){
//     $('body').css('backgroundColor','#ddd');
// });

// document.querySelector('body').innerHTML='welcom'

import $ from 'jquery'

$(function(){
    // window ->함수적용
    let windowW = $(window).width();
    // console.log(windowW);

    // resize -> reset
    $(window).on('resize',function(e){
        window.location.reload();
    })

    if(windowW > 1134){ 
        nav();
        aside();
    }
    else if(windowW <= 1134 && windowW > 980){ 
        nav();
        aside();
    }
    else if(windowW <=980 && windowW > 580){
        tNav();
        gallery();
    }
    else if(windowW <= 580){
        tNav();
        gallery();
        formData();
    }

    // 함수
    // 1.nav
    function nav(){
        $('nav li>a').on('click',function(e){
            const navA = $(this).attr('href');
            const aPos = $(navA).offset().top;
            const headerHeight = $('#header').innerHeight();
            console.log(headerHeight);
            $('html,body').animate({scrollTop:aPos-70},600);

            return false
        })
       
    }
    // 2.nav >> tablet, mobile
    function tNav(){

        $('#header .btn').on('click',function(e){
           
            $(this).hide();

            $('nav').animate({left : 0},500);
        })

        $('nav li>a').on('click',function(e){
            let aHref = $(this).attr('href');
            const aPos = $(aHref).offset().top;
            let headerH = $('#header').innerHeight();
            let navW = $('nav').innerWidth();
            let windowW = $(window).width();
            if(windowW >= 580){
                navW += 60;
            }
            $('html,body').animate({scrollTop:aPos - headerH},600);
            $('nav').css('left','-'+navW+'px');
            $('#header .btn').show();

            return false
        })
        $('nav .close').on('click',function(e){
            let navW = $('nav').innerWidth();
            let windowW = $(window).width();

            if(windowW >= 580){
                navW += 60;
            }
            $('nav').animate({left : '-'+navW+
            'px'},500)
            $('#header .btn').show();
        });
        
    }
    
    // 3.aside
    function aside(){

        $('aside li>a').on('click',function(e){

            const asideA = $(this).attr('href');
            const aPos = $(asideA).offset().top;
            const headerTop = $('#header').innerHeight();
            $('html,body').animate({scrollTop:aPos-headerTop},500)

            // 
            return false;
        });
    }

    // 4.gallery
// console.log($('#box03 #all figure').width());
// console.log($('#box03 #all figure').outerWidth(true)); -> figure 1개의 크기

// 준비하기

function gallery(){
    const figureW = $('#box03 #all figure').outerWidth(true);
    $('#all figure:last').prependTo('#all');
    $('#all').css('margin-left','-'+figureW+'px')

    // 이벤트 
    $('#box03 .prev').on('click',function(e){
        $('#all').animate({marginLeft : '+='+figureW+'px'},500,function(){
            $('#all figure:last').prependTo('#all');
            $('#all').css('margin-left','-'+figureW+'px');
            return false
        });
        
        
    })
    $('#box03 .next').on('click',function(e){
        $('#all').animate({marginLeft : '-='+figureW+'px'},500,function(){
            $('#all figure:first').appendTo('#all');
            $('#all').css('margin-left','-'+figureW+'px');
            
        return false
        });
    })
}

// from ->mobile
function formData(){

    let $liForm = $('#box04 li>span>input,#box04 li>span>textarea');
    $liForm.removeAttr('placeholder');
    $liForm.on('focus',function(e){
        $(this).prev('label').fadeOut(500);
    });
    $liForm.on('blur',function(e){

       let str = $(this).val();
       if(str == ''){
           $(this).prev('label').fadeIn();
       }
    });
}



    // 5.modal


    // 리셋 맨위에

})