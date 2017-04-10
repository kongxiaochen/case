var $=function(el){
    return document.querySelector(el);
}
function addEvent(ele, event, handler) {
    if (ele.addEventListener) {
        ele.addEventListener(event, handler, false);
    } else if (ele.attachEvent) { 
        ele.attachEvent('on' + event, handler);
    } else {
        ele['on' + event] = handler;
    }
}
function removeEvent(ele, event, handler) {
    if (ele.removeEventListener) {
        ele.removeEventListener(event, handler, false);
    } else if (ele.detachEvent) {
        ele.detachEvent('on' + event, handler);
    } else {
        ele['on' + event] = null;
    }
}