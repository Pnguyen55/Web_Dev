
function printReverse(array){
	for(i = array.length-1; i >= 0; i--){
		console.log(array[i]);
	}
}

function isUniform(array){

	var theTruth = array[0];

	for(var i = 0; i < array.length; i++){
		if(array[i] != theTruth){
			return false;
		}
		console.log(array[i]);
	}

	return true;
}


function sumArray(array){
	var sum = 0;

	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}

	return sum;
}

function max(array){
	var max = array[0];

	for(var i = 0; i < array.length; i++){
		if(array[i] > max){
			max = array[i];
		}
	}

	return max;
}