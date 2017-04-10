/*数组去重*/
Array.prototype.unique = function(){
	var res=[];
	var obj = {};
	for(var i=0; i<this.length; i++){
		if(!obj[this[i]]){
			res.push(this[i]);
			obj[this[i]] = 1;
		}
	}
	return res;
}
/*冒泡*/
function bubble(arr){
	var i = arr.length;
	var temp;
	while(i>0){
		for(var j=0; j<i-1; j++){
			if(arr[j]<arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
		i--;
	}
	return arr;
}
/*快排*/
function quickSort(arr){
	if(arr.length <= 1){return arr;}
	var pivotIndex = Math.floor(arr.length/2);
	var pivot = arr.splice(pivotIndex,1)[0];
	var left = [];
	var right = [];

	for(var i=0 ; i<arr.length; i++){
		if(arr[i]<pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat([pivot],quickSort(right));
}