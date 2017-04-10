 var $=function(el){
 	return document.querySelector(el);
 }
 var myName=$("#inName");
 var note=$("#note");
 var btn=$("#btn");

 function checkForm(){
 	console.log(myName.value);
 	console.log(myName.innerText);
 	if(myName.value==""){
      myName.style.borderColor="red";
      note.innerHTML="<span style='color:red;'>姓名不能为空</span>";
     
 	}else{
 	var len=myName.value.replace(/[^x00-xff]/g,"aa").length;
 	if(len>=4&&len<=16){
 	  myName.style.borderColor="green";
      note.innerHTML="<span style='color:green;'>名称格式正确</span>";
      /*myForm.submit();*/
 	}else{
      myName.style.borderColor="red";
      note.innerHTML="<span style='color:red;''>名称格式错误</span>";
      return false;
 	}
    }
    
 }

btn.addEventListener("click",checkForm);

