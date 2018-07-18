//create secretNumber

var secretNumber = 4;
var success = false;
//ask user for guess

while (success == false){
var guess = Number(prompt("Guess a number"));

//check guess

if (guess === secretNumber) {
	alert("You guessed the secret number!");
	success = true;
}
else if(guess > secretNumber) {
	alert("Too high. Guess again!");
}
else if (guess < secretNumber) {
	alert("Too low. Guess again!");
}
else {
	alert("Please guess a number");
}
}