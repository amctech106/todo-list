let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");
let tasks = []

btn.addEventListener("click", function(){
let task =inp.value.trim();

if (task===""){
    alert("Please Enter a Task")
    return
}

tasks.push(task)
inp.value=""

displayTasks()
});

function displayTasks(){
result.textContent="";

tasks.forEach(function(item , index){
result.innerHTML+=`${index +1} . ${item} <button onclick = "removeTask(${index})">❌</button><br>`
})
}

function removeTask(index){
    tasks.splice(index,1)
    displayTasks();
};
