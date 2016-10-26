$(document).ready(function(){
    if (_w < _h) {
       $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*7.5+'rem'); 
    } else{
        $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*12+'rem'); 
    }
    $(window).resize(function(){
        if (_w < _h) {
           $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*7.5+'rem'); 
        } else{
            $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*12+'rem');
        }
    });
});
