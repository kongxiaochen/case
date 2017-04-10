
console.log("ll");
var btn=document.getElementsByTagName("input"),
    preBtn=btn[0],
    inBtn=btn[1],
    postBtn=btn[2],
    treeRoot=document.getElementsByClassName("root")[0],
    divList=[],
    timer=null;

preBtn.addEventListener("click",function(){
	reset();
	preOrder(treeRoot);
	changeColor();
})

inBtn.addEventListener("click",function(){
    reset();
    inOrder(treeRoot);
    changeColor();
})

postBtn.addEventListener("click",function(){
	reset();
	postOrder(treeRoot);
	changeColor();
})

function preOrder(node){
	if(!(node==null)){
		divList.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}

function inOrder(node){
	if(!(node==null)){
		inOrder(node.firstElementChild);
		divList.push(node);
		inOrder(node.lastElementChild);
	}
}
function postOrder(node){
	if(!(node==null)){
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		divList.push(node);
	}
}
function changeColor(){
	console.log("ll");
	var i=0;
	divList[i].style.backgroundColor="#9999FF";
	timer=setInterval(function(){
		i++;
		if(i<divList.length){
          divList[i-1].style.backgroundColor="#fff";
          divList[i].style.backgroundColor="#9999FF";
		}else{
			clearInterval(timer);
			divList[divList.length-1].style.backgroundColor="#fff";
		}
	},500)
}
function reset(){
	divList=[];
	clearInterval(timer);
	var divs=document.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		divs[i].style.backgroundColor="#fff";
	}
}
