$(document).ready(function(){
    var img_intens=$('.slider_banner li').length;
    var img_pos=1;
    for(i=1; i<=img_intens; i++){
        $('.paginacion_banner').append('<li><span class="fas fa-circle"></span></li>');
    }

    $('.slider_banner li').hide();
    $('.slider_banner li:first').show();

    $('.paginacion_banner li').click(paginacion);

    function paginacion(){
        var paginacion_pos=$(this).index() +1;
        $('.slider_banner li').hide();
        $('.slider_banner li:nth-child('+ paginacion_pos+')').fadeIn();
        $('.paginacion_banner li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});
        img_pos=paginacion_pos;
    }

    setInterval(function(){
        nexslider()
    }, 4000);

    function nexslider(){
        if(img_pos>=img_intens){
            img_pos=1;
        }else{
            img_pos++;
        }
        $('.paginacion_banner li').css({'color': '#858585'});
        $('.paginacion_banner li:nth-child('+ img_pos+')').css({'color': '#CD6E2E'});
        $('.slider_banner li').hide();
        $('.slider_banner li:nth-child('+ img_pos+')').fadeIn();

    }
});