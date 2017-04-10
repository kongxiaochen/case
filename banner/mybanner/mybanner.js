function myBanner(){
   this.offset=500;
   this.index=1;
   this.buttons=document.getElementById("buttons").getElementsByTagName("span");
   this.init();
}
myBanner.prototype={
	init:function(){
		var prev=document.getElementById("prev");
		var next=document.getElementById("next");
		
		var index=1;
		var self=this;
		prev.addEventListener("click",function(){
			if(self.index==1){self.index=3;}else{self.index+=-1;}
			
			self.animate(self.offset);
			self.showButton();
		});
		next.addEventListener("click",function(){
            if(self.index==3){self.index=1;}else{self.index+=1;}
			self.animate(-self.offset);
			self.showButton();
		});
		for(var i=0;i<self.buttons.length;i++){
			self.buttons[i].addEventListener("click",function(){
				var nowIndex=this.getAttribute('index');
				var n= nowIndex-self.index;
				self.animate(n*(-self.offset));
				self.index=nowIndex;
				self.showButton();
			})
		}
	},
    animate:function(offset){

        var pics=document.getElementById("pics");
        var newLeft=parseInt(pics.style.left)+offset;
        pics.style.left=newLeft+"px";
        if(newLeft>-500){                       //无限滚动
           pics.style.left=-1500+"px";
        }
        if(newLeft<-1500){
           pics.style.left=-500+"px";
        }
    },
    showButton:function(){
    	for(var i=0;i<this.buttons.length;i++){
    		if(this.buttons[i].className=="on"){
    			this.buttons[i].className="";
    			break;
    		}
    	}
    	this.buttons[this.index-1].className="on";
    }

}