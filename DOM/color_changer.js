
var body = document.querySelector("body");

var button = document.querySelector("button");

button.addEventListener("click", function() {
	changeColorBG(body);
});

button.addEventListener("click", function(){
	body.classList.toggle("purple");
});


function changeColorBG(element) {
	if(element.style.background == "purple"){
		element.style.background = "white";
	}
	else {
		element.style.background = "purple";
	}
}

