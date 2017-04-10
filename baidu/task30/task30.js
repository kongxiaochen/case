var $=function(el){
   return document.querySelector(el);
}
var right=["名称格式正确","密码可用","密码输入一致","邮箱格式正确","手机格式正确"];
var wrong=["名称格式有误","密码不可用","密码输入不一致","邮箱格式错误","手机格式错误"];
var log=[false,false,false,false,false];

function Show(node,id){
	this.node=node;
	this.id=id;
	this.note=$("#n"+this.id);
}

Show.prototype.hint=function(){
    this.note.style="display:block";
    this.node.style.borderColor="cornflowerblue";
}
Show.prototype.judge=function(){
	var flag=false;
    switch(this.id){
    	case 1:
    	   flag=/^[a-zA-Z0-9_]{4,16}$/.test($("#t1").value.replace(/[\u0391-\uFFE5]/g,"aa"));
    	   break;
    	case 2:
    	   flag=/^[a-zA-Z0-9_]{4,16}$/.test($("#t2").value);
    	   break;
    	case 3:
    	   flag=($("#t3").value==$("#t2").value);
    	   break;
    	case 4:
    	   flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test($("#t4").value);
           break;
        case 5:
           flag=/^[1][0-9]{10}$/.test($("#t5").value);
           break;
    }
    if(flag){
    	this.node.style.borderColor="green";
        this.note.innerHTML=right[this.id-1];
        this.note.style.color="green";
        log[this.id-1]="true";
    }else{
    	this.node.style.borderColor="red";
        this.note.innerHTML=wrong[this.id-1];
        this.note.style.color="red";
    }
}
function addevent(node,m){
    node.addEventListener("focus",function(){m.hint();});
    node.addEventListener("blur",function(){m.judge();});
}


var m1=new Show($("#t1"),1);
var m2=new Show($("#t2"),2);
var m3=new Show($("#t3"),3);
var m4=new Show($("#t4"),4);
var m5=new Show($("#t5"),5);

addevent($("#t1"),m1);
addevent($("#t2"),m2);
addevent($("#t3"),m3);
addevent($("#t4"),m4);
addevent($("#t5"),m5);

$("#btn").addEventListener("click",function(){
	var sbm=log.indexOf("true");
	if(sbm==-1){alert("提交失败");}
	else{alert("提交成功");}
 
})