$(document).ready(function () {  
    
    $('.card').on('mouseenter',function (e) { 
        x = e.pagex - $(this).offset().left,
        y = e.pagey - $(this).offset().top ;

        $(this).find('span').css({top:y, left:x});
    });

        $('.card').on('mouseout',function (e) { 
        x = e.pageX - $(this).offset().left,
        y = e.pageY - $(this).offset().top;

        $(this).find('span').css({top:y, left:x});
    });

});