var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob","tina"],
	add: function(x,y) {
		return x + y;
	},
	speak: function(){
		return "WOOF";
	}
}

var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

function print(arr) {
	arr.forEach(function(el){
		console.log(el);
	});
}

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}

comments.print();

