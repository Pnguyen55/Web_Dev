var todos = ["Buy New Turtle"];

window.setTimeout(function() {
  
	var input = prompt("What would you like to do?");

	while(input != "quit") {
		if(input == "list") {
			console.log(todos)
		}
		else if(input == "new"){

			var newTodo = prompt("Enter new todo");
			todos.push(newTodo);
		}

		input = prompt("What would you like to do?")
	}

}, 500);

console.log("Okay, you quit the app")