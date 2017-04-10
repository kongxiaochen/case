var FloatLayer=function(divFloat,mask){
	this.divFloat=divFloat;
	this.mask=mask;
	this.aminateTime=500;

	this.init();
}

FloatLayer.prototype={
	init:function(){
     this.divFloat.style.transition="transform "+this.aminateTime+"ms";
     this.divFloat.parentNode.removeChild(this.divFloat);
     this.mask.appendChild(this.divFloat);
     //*************************************************
     this.divFloat.style.width = this.divFloat.clientWidth + 'px';
     //*************************************************
     this.setDragNode(this.divFloat.children[0]);
    //*************************************************
      addEvent(this.divFloat, 'click', function(e) {      
            e.stopPropagation();
        })
    //************************************************
	},
	show:function(){
	 this.divFloat.style.left="50%";
	 this.divFloat.style.top="50%";
     this.divFloat.style.transform="translate(-50%,-50%) scale(1,1)";
     this.mask.style.visibility="visible";
	},
	hide:function(){
	 this.divFloat.style.transform="translate(-50%,-50%) scale(0,0)";
	 var self=this;
	 setTimeout(function(){
	 	self.mask.style.visibility="hidden";
	 },this.aminateTime);
	},
	setDragNode:function(node){
     var self=this;
     node.style.cursor="move";

     addEvent(node,"mousedown",function(event){
     	
     	var disX=event.clientX-self.divFloat.offsetLeft;
     	    disY=event.clientY-self.divFloat.offsetTop;
     	    console.log(disY);
     	  var move=function(event){
     	  	self.divFloat.style.left=event.clientX-disX+"px";
     	  	self.divFloat.style.top=event.clientY-disY+"px";
     	  }
     	  addEvent(document,"mousemove",move);
     	  addEvent(document,"mouseup",function(){
     	  	removeEvent(document,"mousemove",move);
     	  })
     })
	}

}



var layer=new FloatLayer($("#divFloat"),$("#mask"));
layer.show();
addEvent($("#btnSure"),"click",function(){layer.hide();});
addEvent($("#btnCancel"),"click",function(){layer.hide();});
addEvent($("#mask"),"click",function(){layer.hide();})
addEvent($("#btnLogin"),"click",function(){layer.show();})