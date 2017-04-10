var $=function(el){
    return document.querySelector(el);
}
var nodeList=[], //放节点
    timer=null,
    superNode=$("#super"),
    prebtn=$("button");
   

function preOrder(item){

	if(item!=null){
		nodeList.push(item);
		var arr=item.childNodes;
		for(var i=0;i<arr.length;i++){
			if(arr[i].nodeType==1){
			preOrder(arr[i]);}
		}
	}
}
function changeColor(sw){
	console.log(sw);
	var i=0;
	nodeList[0].style.backgroundColor="#9999FF";
	
	timer=setInterval(function(){
		++i;
        
        if(i<nodeList.length){
        	if(sw!=nodeList[i-1].id){
               nodeList[i-1].style.backgroundColor="#fff";
		       nodeList[i].style.backgroundColor="#9999FF";

        	}else{
        	   clearInterval(timer);
        	   nodeList[i-1].style.backgroundColor="red";
        	   $("#yes").innerText="已找到"+sw;
        	}
        }

		//if((i<nodeList.length)&&(!(sw==nodeList[i-1])){
		//nodeList[i-1].style.backgroundColor="#fff";
		//nodeList[i].style.backgroundColor="#9999FF";
	    //}else if((i<nodeList.length)&&(sw==nodeList[i-1])){
	    else{
	    	clearInterval(timer);
	    	nodeList[nodeList.length-1].style.backgroundColor="#fff";
              $("#no").innerText="抱歉,您搜索的内容不存在";
	    }
	},500)
}
function reset(){
    
    clearInterval(timer);
    nodeList.map(function(d){
    	d.style.backgroundColor="#fff";
    })
    nodeList=[];
}


prebtn.addEventListener("click",function(){
	 var searchWord=$("input").value;
      	reset();
      	preOrder(superNode);
        changeColor(searchWord);
})

