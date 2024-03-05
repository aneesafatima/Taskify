console.log("Welcome to my To-Do List App");
const check = document.querySelector(".check");
const content = document.getElementsByTagName("p")[0];
const newTask = document.querySelector(".new-task");
const add = document.querySelector(".add");
console.log(newTask, add);





newTask.addEventListener("click", ()=>{
newTask.innerHTML = `<input type="text" placeholder="   enter your task"><button>Submit</button>`
})

check.addEventListener("click", ()=>{
    check.className = check.classList.contains("fa-circle") ? "fa-regular fa-circle-check fa-xl check" : "fa-regular fa-circle fa-xl check";
    content.classList.toggle("checked");
})
