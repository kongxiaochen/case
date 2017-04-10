
function blockGo(div){
    this.block=div;
    this.direction=1;
    this.x=5*2;
    this.y=5;

    this.init();

}
blockGo.prototype={
	init:function(){
		var self=this;
		$("#btn").click(function(){
			console.log("ll");
             self.getOrder();
             
		});
	},
	getOrder:function(){
		console.log("ll");
		var order=$("#myText").val().toLowerCase();
		if(order=="go"){
			if(this.x<20&&this.y<10){
                this.goTo(this.direction);
            }else{
            	alert("超出范围");
            }
		}else{
		order=order.slice(-3);
		this.getDirection(order);
		this.changeDirection(this.direction);
	    }

	},
	getDirection:function(order){
        var dic=this.direction;
        switch(order){
        	case 'lef':
        	dic=dic+1;
        	break;
        	case 'rig':
        	dic=dic+3;
        	console.log(dic);
        	break;
        	case 'bac':
        	dic=dic+2;
        	break;
        }
        this.direction=dic%4;
	},
	changeDirection:function(direction){
        switch(direction){
        	case 1:
        	$("#head").removeClass().addClass("left");
        	break;
        	case 2:
        	$("#head").removeClass().addClass("bottom");
        	break;
        	case 3:
        	$("#head").removeClass().addClass("right");
        	break;
        	case 0:
        	$("#head").removeClass().addClass("top");
        	break;
        }
	},
	getDesNode:function(){
		var table=document.getElementById("table").childNodes.item(1);
		var desNode=table.childNodes.item(this.x).childNodes.item(this.y);
        return desNode;

	},
	goTo:function(direction){
		
		switch(direction){
			case 1:
            this.y=this.y-1;
            break;
            case 2:
            this.x=this.x+2;
            break;
            case 3:
            this.y=this.y+1;
            break;
            case 0:
            this.x=this.x-2;
            break;
		}
		 
		 var block=document.getElementById("myBlock");
         $("#myBlock").parent().empty();
         console.log(this.x,this.y);
         this.getDesNode().appendChild(block);
 
	}
}