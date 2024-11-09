const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");
//add new task to the list 
function addTask(){
    let taskValue = inputTask.value;
    if(!taskValue){
        alert("You Must add a value");
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = taskValue;
        taskList.appendChild(li);

        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    //clear input after adding a new task
    inputTask.value="";
}

btn.addEventListener("click", addTask);


//add task when click to button
taskList.addEventListener("click" ,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        setTask();
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        setTask();
    }
});
//add functionality when click enter it will add a  new task

inputTask.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    };
});

function setTask(){
    localStorage.setItem("lists",taskList.innerHTML);
}
function loadTasks(){
taskList.innerHTML = localStorage.getItem("lists");
}
loadTasks();