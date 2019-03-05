$(document).ready(function(){
    $('.btn_up').click(function(){
        $('body').animate({'scrollTop': 0}, 1000);
        $('html').animate({'scrollTop': 0}, 1000);
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $('.btn_up').addClass('active');
        }
        else{
            $('.btn_up').removeClass('active');
        }  
    });
});