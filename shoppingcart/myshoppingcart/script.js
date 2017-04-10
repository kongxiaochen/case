window.onload=function(){
    
    if(!document.getElementsByClassName){
    	document.getElementsByClassName=function(cls){
    	var ret=[];
    	var els=document.getElementsByTagName('*');
    	for(var i=0;i<els.length;i++){
    		if(els[i].className===cls
    			||els[i].className.indexOf(" "+cls)>=0
    			||els[i].className.indexOf(" "+cls+" ")>=0
    			||els[i].className.indexOf(cls+" ")>=0){
    			ret.push(els[i]);
    		}
    	}
    	return ret;
        }
    }

	var cartTable=document.getElementById('cartTable');
	var tr=cartTable.children[1].rows;
	var checkInputs=document.getElementsByClassName('check');
	var checkAllInputs=document.getElementsByClassName('check-all');
	var selectedTotal=document.getElementById('selectedTotal');
	var priceTotal=document.getElementById('priceTotal');

	function getTotal(){
		var selected=0;
		var price=0;

		for(var j=0; j<tr.length; j++){
			if (tr[j].getElementsByTagName('input')[0].checked){
				selected+=parseInt(tr[j].getElementsByTagName('input')[1].value);
				price+=parseFloat(tr[j].cells[4].innerHTML);
			}
		}

		selectedTotal.innerHTML=selected;
		priceTotal.innerHTML=price.toFixed(2);

	}

	for(var i=0; i<checkInputs.length; i++){
		checkInputs[i].onclick=function(){
			if(this.className="check-all check"){
				checkInputs.checked
			}
               getTotal();
			}
		}
	}
}