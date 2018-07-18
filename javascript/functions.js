//Functions Problem Set

//Write a function that returns true if a number is even
/*
function isEven(num) {
	if(num % 2 == 0) {
		return true;
	}
	return false;
}
*/
function isEven(num) {
	return (num % 2 == 0);
}


//Write a function factorial() which takes a single numeric
//argument and returns the factorial of that number

function factorial(num) {
	if(num == 0){
		return 1;
	}
	for(var i = num-1; i > 0; i--){
		num = num * i;	
	}	
	return num;	
}

//Write a function kebabToSnake() which takes a single kebab-cased string
//argument and returns the snake_cased version
/*
function kebabToSnake(str) {
	
	while(str.includes("-")){
		str = str.replace("-", "_");
	}

	return str;
} 
*/
function kebabToSnake(str){
	return str.replace(/-/g, "_");
}
