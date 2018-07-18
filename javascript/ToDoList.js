var todos = ["Buy New Turtle"];

window.setTimeout(function() {
  
	var input = prompt("What would you like to do?");

	while(input != "quit") {
		//handle input
		if(input == "list") {
			listTodos();
		}
		else if(input == "new"){
			addTodos();
		}
		else if(input == "delete"){
			deleteTodos();
		}

		input = prompt("What would you like to do?")
	}

}, 500);

console.log("Okay, you quit the app")

function listTodos(){
	for(var i = 0; i < todos.length;i++){
		console.log("***********");
		console.log(i + ": " +todos[i]);
	}
}

function addTodos(){
	//ask for new todo, and pushes it to the end of the array
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);

	//displaying added element
	console.log("Added: " + newTodo);
}

function deleteTodos(){
	//delete todo from array

	var indexDelete = prompt("Enter index of todo to delete");
			
	var deleted = todos.splice(indexDelete,1);
	//displaying deleted element
	console.log("Deleted: " + deleted);
}