let tasks = ["Complete Assignment", "Buy Groceries", "Call Friend"];


showTasks();


function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task == "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);
    input.value = ""; 
    showTasks(); 
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

   
    for(let i = 0; i < tasks.length; i++) {
        list.innerHTML += "<li>" + tasks[i] +
        "<button onclick='deleteTask(" + i + ")'>X</button></li>";
    }
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks(); 
}