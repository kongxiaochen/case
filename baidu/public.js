var $ = function(el) {
    return document.querySelector(el);
}

var $$ = function(el) {
    return document.querySelectorAll(el);
}

var createEle = function(tagName) {
    return document.createElement(tagName);       /*creatElement常与appendChild一起用*/
}

// 兼容的事件监听方法
function addEvent(ele, event, handler) {
    if (ele.addEventListener) {
        ele.addEventListener(event, handler, false);
    } else if (ele.attachEvent) {
        ele.attachEvent('on' + event, handler);
    } else {
        ele['on' + event] = handler;
    }
}
//兼容的移除事件方法
function removeEvent(ele, event, handler) {
    if (ele.removeEventListener) {
        ele.removeEventListener(event, handler, false);
    } else if (ele.detachEvent) {
        ele.detachEvent('on' + event, handler);
    } else {
        ele['on' + event] = null;
    }
}