
var queue=[];

function leftPush(num){
	queue.unshift(num);
	paint();
}
function rightPush(num){
	queue.push(num);
	paint();
}
function leftPop(){
	if(!queue.length==0){
	alert(queue.shift());
	paint();
    }else{
    alert("empty");
	}
}
function rightPop(){
    if(!queue.length==0){
	alert(queue.pop());
	paint();
    }else{
    alert("empty");
	}
}
/*function del(id){
    queue.splice(id,1); 
    paint();   
}
function addDel(){
	for(var n=0;n<aa.childNodes.length;n++){
		aa.childNodes[n].onclick=del(n);
		console.log(aa.childNodes);
	}
}*/

function paint(){
    var str="";
    for(var i=0;i<queue.length;i++){
    	str+="<li>"+queue[i]+"</li>";
    }
    document.getElementById("aa").innerHTML=str;
    document.getElementById("myText").value="";
    document.getElementById("myText").focus();
}

function init(){

   document.getElementById("left_in").addEventListener("click",function(){
   	  var num=document.getElementById("myText").value;
   	  leftPush(num);
   })
   document.getElementById("right_in").addEventListener("click",function(){
   	  var num=document.getElementById("myText").value;
   	  rightPush(num);
   })
   document.getElementById("left_out").addEventListener("click",leftPop)
   document.getElementById("right_out").addEventListener("click",rightPop)
    
   document.getElementById("aa").addEventListener("click",function(event){
   	var li=event.target;
    //li.parentNode.removeChild(li);
    //var index=li.value.slice(5,-1);
    var ul=li.parentNode;
    for(var i=0;i<queue.length;i++){
    	
    	if(li==ul.childNodes[i]){
    	queue.splice(i,1);
    	}
    }
    paint();
    //queue.splice(index,1);
    //paint();

   })

}
init();