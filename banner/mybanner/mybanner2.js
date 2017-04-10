window.onload=function(){
   var offset=500;
   var index=1;
   var buttons=document.getElementById("buttons").getElementsByTagName("span");
   var prev=document.getElementById("prev");
   var next=document.getElementById("next");
   var pics=document.getElementById("pics");
   var container=document.getElementById("container");
   var len=3;
   var animated=false;
   var timer;
   var autoTime=2500;

    function animate(offset){
      animated=true;
      var newLeft=parseInt(pics.style.left)+offset;
      var time=500;
      var inteval=10;
      var speed=offset/(time/inteval);

      var go=function(){
      	
          if((speed>0&&parseInt(pics.style.left)<newLeft)||(speed<0&&parseInt(pics.style.left)>newLeft)){
          	pics.style.left=parseInt(pics.style.left)+speed+"px";
          	setTimeout(go,inteval);
          }else{
          	 if(newLeft>-500){                       //无限滚动
                pics.style.left=-500*len+"px"; }
             if(newLeft<-500*len){
                pics.style.left=-500+"px"; }

             animated=false;
          }
      }
      go();
    }

    function showButton(){
    	for(var i=0;i<buttons.length;i++){
    		if(buttons[i].className=="on"){
    			buttons[i].className="";
    			break;
    		}
    	}
    	buttons[index-1].className="on";
    }

    function play(){
       timer=setInterval(function(){next.onclick();},autoTime);
    }
    function stop(){
    	clearInterval(timer);
    }
    
    play();
    prev.onclick=function(){
			if(index==1){index=3;}else{index+=-1;}
			
			if(!animated){animate(offset);}
			
			showButton();
		};
	next.onclick=function(){
            if(index==3){index=1;}else{index+=1;}
			if(!animated){animate(-offset);}
			showButton();
		};
	for(var i=0;i<buttons.length;i++){
			buttons[i].onclick=function(){
				var nowIndex=this.getAttribute('index');
				var n= nowIndex-index;
				if(!animated){animate(n*(-offset));}
				index=nowIndex;
				showButton();
			}
		}
    container.onmouseout=play;
    container.onmouseover=stop;
    
}