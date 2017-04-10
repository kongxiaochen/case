
function changeForm(){
   var myRadio=document.getElementsByName("identity");
   var myForm=document.getElementsByTagName("form");
   for(var i=0;i<myForm.length;i++){
   	if(myRadio[i].checked){
   		myForm[i].style.display="block";
   	}else{
   		myForm[i].style.display="none";
   	}
   }
}
function changeOption(){
	var myCity=$("#city").value;
	var myOption=document.getElementsByTagName("select");
	for(var i=1;i<myOption.length;i++){
		myOption[i].style.display="none";
	}
    $("#univercity-"+myCity).style.display="inline-block";
}

addEvent($("#stu"),"click",changeForm);
addEvent($("#emp"),"click",changeForm);

addEvent($("#city"),"click",changeOption);