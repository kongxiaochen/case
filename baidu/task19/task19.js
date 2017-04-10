
var queue=[];

function leftPush(num){
  if(queue.length<=60){
	queue.unshift(num);
	paint();
}else{
   alert("队列已满，无法添加"); }
}

function rightPush(num){
  if(queue.length<=60){
	queue.push(num);
	paint();
}else{
  alert("队列已满，无法添加");}
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
    	str+="<li style=\'height:"+parseInt(queue[i])+"px\'></li>";
    }
    document.getElementById("aa").innerHTML=str;
    document.getElementById("myText").value="";
    document.getElementById("myText").focus();
}

/*function check(num){
  if(!(10<=num&&num<=100)){
    alert("请输入10到100间的数字");
    document.getElementById("myText").value="";
    document.getElementById("myText").focus();
    return;
  } 
  //if(queue.length=60){
   // alert("队列已满，无法添加");
  //  return;
 // }
 
}*/
function bubblesort(){
   /*var i=queue.length;
   var temp;
   while(i>0){
    for(var j=0;j<i-1;j++){
      if(queue[j]>queue[j+1]){
        temp=queue[j];
        queue[j]=queue[j+1];
        queue[j+1]=temp;
      }
    }i--;
   }
   paint();*/

   var i=queue.length;
   var j=0;
   var timer=setInterval(function(){
      if(i<0){clearInterval(timer);}
      if(j==i-1){j=0;i--;}
      if(queue[j]>queue[j+1]){
        var temp=queue[j];
        queue[j]=queue[j+1];
        queue[j+1]=temp;
        paint();
      }
      j++;
   },100);
}


function init(){

   document.getElementById("myText").focus();
   
   document.getElementById("left_in").addEventListener("click",function(){
   	  var num=document.getElementById("myText").value;
      if(!(10<=num&&num<=100)){
           alert("请输入10到100间的数字");
          document.getElementById("myText").value="";
          document.getElementById("myText").focus();
        } else{leftPush(num);}

   })
   document.getElementById("right_in").addEventListener("click",function(){
   	  var num=document.getElementById("myText").value;
      if(!(10<=num&&num<=100)){
           alert("请输入10到100间的数字");
          document.getElementById("myText").value="";
          document.getElementById("myText").focus();
        } else{
   	  rightPush(num);}

   })

   document.getElementById("left_out").addEventListener("click",leftPop);
   document.getElementById("right_out").addEventListener("click",rightPop);
   document.getElementById("num_sort").addEventListener("click",bubblesort);
    
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