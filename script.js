let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");
let tasks = [];

btn.addEventListener("click", function () {
  let task = inp.value.trim();

  if (task === "") {
    result.textContent = "او بھائی ! کچھ تو لکھیں ";
    result.classList.add("urdu");
    return;
  }

  tasks.push(task);
  inp.value = "";

  displayTasks();
});

function displayTasks() {
  result.textContent = "";

  tasks.forEach(function (task, index) {
    result.innerHTML += `${index + 1} . ${task} <button onclick = "removeTask(${index})">❌</button><br>`;
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
