import $ from 'jquery';

function navOpen() {
    if($(window).width() < 800){
        $('.icon-nav').on('click', function(){
            if($(this).hasClass('icon-nav-open')){
                $(this).removeClass('icon-nav-open');
                $('.nav-container').removeClass('nav-container-open');
                $('.main-container').removeClass('nav-container-open-filter');
                $('html').removeClass('overflow-hidden');
            }else{
                $(this).addClass('icon-nav-open');
                $('.nav-container').addClass('nav-container-open');
                $('.main-container').addClass('nav-container-open-filter');
                $('html').addClass('overflow-hidden');
            }
        });
        $('.nav-link').on('click', function(){
            if($('.icon-nav').hasClass('icon-nav-open')){
                $('.icon-nav').removeClass('icon-nav-open');
                $('.nav-container').removeClass('nav-container-open');
                $('.main-container').removeClass('nav-container-open-filter');
                $('html').removeClass('overflow-hidden');
            }else{
                $('.icon-nav').addClass('icon-nav-open');
                $('.nav-container').addClass('nav-container-open');
                $('.main-container').addClass('nav-container-open-filter');
                $('html').addClass('overflow-hidden');
            }
        });
    }
}

export default navOpen
