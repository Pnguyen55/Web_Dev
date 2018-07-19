var movie = {
	name: "",
	rating: 0,
	hasWatched: false
};

var movieList = []

var Frozen = {
	name: "Frozen",
	rating: 5,
	hasWatched: true
};

movieList.push(Frozen);

var ToyStory = {
	name: "Toy Story",
	rating: 2,
	hasWatched: false
};

movieList.push(ToyStory);

for(var i = 0; i < movieList.length; i++){
	var result = "You have ";

	if(movieList[i].hasWatched){
		result += "watched "
	}
	else{
		result += "not seen "
	}

	result += "\"" + movieList[i].name + "\" - ";
	result += movieList[i].rating + " stars";

	console.log(result);
}