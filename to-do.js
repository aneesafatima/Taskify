console.log("Welcome to my To-Do List App");

const list = document.querySelector(".list");




const initializeTask = () =>{
const newTask = document.querySelector(".new-task");
newTask.innerHTML = `<input type="text" class="task-info" placeholder="   enter your task"><button class="submit" type="submit">Enter</button><hr>`
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", ()=>{
const taskInfo = document.querySelector(".task-info");
const element = document.createElement("li");
element.innerHTML = `<li><i class="fa-regular fa-circle fa-xl check"></i>
<p class="content">${taskInfo.value}</p> 
 <span>Due in 3 mins</span><hr>
 </li>`;
list.appendChild(element);
newTask.innerHTML = '<i class="fa-solid fa-plus fa-xl" onclick="initializeTask()"></i><p>New Task</p><hr>'

})
}




list.addEventListener("click", (event) =>{
    const check = event.target.closest(".check");
   if(check){

      const content = check.nextElementSibling;
      check.className = check.classList.contains("fa-circle") ? "fa-regular fa-circle-check fa-xl check" : "fa-regular fa-circle fa-xl check";
      content.classList.toggle("checked");
      const parent = check.parentNode;
      setTimeout(()=>{
         parent.innerHTML = "";
      },400)
   }

   
})



const mode = document.querySelector(".dark-mode");
mode.addEventListener("click", () =>{
mode.className = mode.classList.contains("fa-moon") ? "fa-regular fa-sun fa-xl dark-mode" : "fa-regular fa-moon fa-xl dark-mode";
const body = document.body;
body.backgroundColor=="#fff" ? darkMode() : whiteMode();
})
 
const darkMode = () =>{
   console.log("Dark mode")
}

const whiteMode = () =>{
   console.log("White mode")
}