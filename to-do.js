console.log("Welcome to my To-Do List App");
const container = document.querySelector(".todo-body");
const list = document.querySelector(".list");
const body = document.body;
const newTask = document.querySelector(".new-task");
const icon = container.querySelectorAll("i");
let clickCount = 0;
let bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
console.log(icon)


const initializeTask = () =>{
clickCount++;
newTask.innerHTML = `<input type="text" class="task-info" placeholder="   enter your task"><button class="submit" type="submit">Enter</button><hr>`
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", ()=>{
const taskInfo = document.querySelector(".task-info");
const element = document.createElement("li");
element.innerHTML = `<li><i class="fa-regular fa-circle fa-xl check"></i>
<p class="content">${taskInfo.value}</p> 
 <span class="due-text">Due in 3 mins</span><hr>
 </li>`;
list.appendChild(element);
newTask.innerHTML = '<i class="fa-solid fa-plus fa-xl" onclick="initializeTask()"></i><p>New Task</p><hr>';
const dueTime = document.querySelectorAll(".due-text");
dueTime.forEach((elem)=>{
elem.style.color = (bodyBackgroundColor === "#162029" ? "#ffffff61" : "#000" );
})

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
      },300)
   }

   
})



const mode = document.querySelector(".dark-mode");
mode.addEventListener("click", () =>{


mode.className = mode.classList.contains("fa-moon") ? "fa-regular fa-sun fa-xl dark-mode" : "fa-regular fa-moon fa-xl dark-mode";
(bodyBackgroundColor === "rgb(255, 255, 255)") ? darkMode() : whiteMode();
})
 
const darkMode = () =>{
   console.log("Dark mode");
   bodyBackgroundColor = "#162029"
   body.style.backgroundColor = bodyBackgroundColor;
   console.log(bodyBackgroundColor);
   document.body.style.color = "#fff";
   container.style.backgroundColor ="#333e4a";
   icon.forEach((elem)=> elem.style.color = "#ffffff61");
   if(clickCount>=1)
   {
   const dueTime = document.querySelectorAll(".due-text");
   dueTime.forEach((elem)=>{
   elem.style.color = (bodyBackgroundColor === "#162029" ? "#ffffff61" : "#000" );
   })
   
}}

const whiteMode = () =>{
   console.log("White mode");
   bodyBackgroundColor = "rgb(255, 255, 255)"
   body.style.backgroundColor = bodyBackgroundColor;
   document.body.style.color = "#000";
   container.style.backgroundColor ="#f2f2f2";
   icon.forEach((elem)=> elem.style.color = "#000");
   if(clickCount>=1)
   {
   const dueTime = document.querySelectorAll(".due-text");
   dueTime.forEach((elem)=>{
   elem.style.color = (bodyBackgroundColor === "#162029" ? "#ffffff61" : "#000" );
   })
   
}
}

