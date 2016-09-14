$(window).on('load',function(){
	waterfall();
	var dataInt={"data":[{"src":'9.jpg'},{"src":'12.jpg'},{"src":'19.jpg'},{"src":'20.jpg'},]}
	$(window).on('scroll',function(){
		/*checkScroll();
		console.log(checkScroll);*/
		if(checkScroll()){
            $.each(dataInt.data,function(key,value){
            	var oBox=$('<div>').addClass('box').appendTo($('#container'));     //jQuery两大优点；支持连缀，隐式迭代
                var oImg=$('<div>').addClass('pics').appendTo($(oBox)); 
                $('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oImg));   //value为js原生对象
            })
            waterfall();
		}
	})
})

function waterfall(){                               
	var oBox=$('#container>div');                   //拿到的不是数组*****
	/*console.log(oBox instanceof Array);*/         //false   
	var w=oBox.eq(0).outerWidth();                  //.eq
	var cols=Math.floor($(window).width()/w);
    $('#container').width(cols*w).css('margin','0 auto');
    var arrH=[];
    oBox.each(function(index,value){                //.each(function(index,value){})
    	
    	var h=oBox.eq(index).outerHeight();
    	if(index<cols){
    		arrH.push(h);
    	}else{
    		var minH=Math.min.apply(null,arrH);
    		var minhIndex=$.inArray(minH,arrH);      //$.inArray(value,Array)
    		$(value).css({
    			'position':'absolute',
    			'top':minH+'px',
    			'left':minhIndex*w+'px'
    		});
            arrH[minhIndex]+=$(value).outerHeight();
    	}
    })
}
function checkScroll(){
     var $lastBox=$('#container>div').last();
     var lastBoxH=Math.floor($lastBox.outerHeight()/2)+$lastBox.offset().top;
     console.log(lastBoxH);
     var scrollTop=$(window).scrollTop();
     console.log(scrollTop);
     var h=$(window).height();
     console.log(h);
     return (lastBoxH<h+scrollTop)?true:false;
}