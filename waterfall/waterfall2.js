window.onload=function(){
    randomSet('container','box');
    setTimeout(function(){waterfall('container','box')},500);
	/*waterfall('container','box');*/
	var dataInt={"data":[{"src":'9.jpg'},{"src":'12.jpg'},{"src":'19.jpg'},{"src":'20.jpg'},]}
	window.onscroll=function(){
		if(checkScroll()){
            var oParent=document.getElementById('container');
            for(var i=1;i<dataInt.data.length;i++){
                var oBox=document.createElement('div');
                oBox.className='box';
                oParent.appendChild(oBox);
                var oPic=document.createElement('div');
                oPic.className='pics';
                oBox.appendChild(oPic);
                var oImg=document.createElement('img');
                oImg.src='images/'+dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfall('container','box');
            
		}
	}
}
function waterfall(container,box){
	var oParent=document.getElementById(container);
	var oBox=getByClass(oParent,box);
	
	var oBoxW=oBox[0].offsetWidth;                          //获取元素的宽度方法
	var cols=Math.floor(document.body.clientWidth/oBoxW);
	/*oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';  //设置container元素的宽，并居中显示*/

    var hArr=[];     //存放每一列的高度
    for(var i=0; i<oBox.length; i++){
    	if(i<cols){
          oBox[i].style.left='0px';  
          oBox[i].style.left=i*oBoxW+'px';
    	  hArr.push(oBox[i].offsetHeight);
        }else{
          var minH=Math.min.apply(null,hArr);     	
          var index=getMinhIndex(hArr,minH);
          /*oBox[i].style.position='absolute';*/
          oBox[i].style.top=minH+'px';
          oBox[i].style.left=oBoxW*index+'px';   //or  oBox[i].style.left=oBox[index].offsetLeft+'px';
          hArr[index]+=oBox[i].offsetHeight;
        }
    }
    console.log(hArr);
}


function getByClass(parent,clsName){                      //通过类名获取元素的函数
	var clsArr=new Array(),
        oElements=parent.getElementsByTagName('*');
    for(var i=0;i<oElements.length;i++){
    	if(oElements[i].className==clsName){
           clsArr.push(oElements[i]);
    	}
    }
    return clsArr;

}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
function checkScroll(){
	var oParent=document.getElementById('container');
	var oBox=getByClass(oParent,'box');
	var lastBoxH=Math.floor(oBox[oBox.length-1].offsetHeight/2)+oBox[oBox.length-1].offsetTop;
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;   //    混杂模式||标准模式
    var height=document.body.clientHeight||document.documentElement.clientHeight;
    return(lastBoxH<scrollTop+height)?true:false;
}
function randomSet(container,box){

    var oParent=document.getElementById(container);
    var oBox=getByClass(oParent,box);

    var oBoxW=oBox[0].offsetWidth;                          //获取元素的宽度方法
    var cols=Math.floor(document.body.clientWidth/oBoxW);
    oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';  //设置container元素的宽，并居中显示


    var midX=(document.body.clientWidth||document.documentElement.clientWidth)/2;
    var midY=(document.body.clientHeight||document.documentElement.clientHeight)/2;
    console.log(document.documentElement.clientHeight);



    for(var i=0;i<oBox.length;i++){
        var randomX=Math.random()*(Math.random()>0.5?1:-1);  //产生正负随机数
        var randomY=Math.random()*(Math.random()>0.5?1:-1);
        var boxX=oBox[i].offsetWidth/2;
        var boxY=oBox[i].offsetHeight/2;

        oBox[i].style.top=midY-boxY+randomY*300+'px';
        oBox[i].style.left=midX-boxX+randomX*300+'px';
    } 
}