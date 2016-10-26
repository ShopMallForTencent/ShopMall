var _w = document.documentElement.clientWidth || document.body.clientWidth,
	_h = document.documentElement.clientHeight || document.body.clientHeight,
    pageW = 750;
var screenFun = function(){
    if (_w < _h) {
        pageW = 750;
        document.documentElement.style.fontSize = _w/pageW*20+'px';
        document.body.className = 'vertical';
    } else{
        pageW = 1334;
        document.documentElement.style.fontSize = _w/pageW*20+'px';
        document.body.className = 'level';
    }
}
document.addEventListener("DOMContentLoaded",function(e){
	screenFun();
});
window.onresize = function(){
	_w = document.documentElement.clientWidth || document.body.clientWidth,
	_h = document.documentElement.clientHeight || document.body.clientHeight;
    screenFun();
};

