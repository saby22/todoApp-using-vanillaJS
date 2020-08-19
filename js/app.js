//get all the elements from the DOM
const plusButton=document.querySelector(".content__header i")
const input_div=document.querySelector(".content__add");
const input=document.querySelector("input");
const todoDiv=document.querySelectorAll(".content__todos");
const todoDelete=document.querySelectorAll(".content__todos-delete i");

//Variables
let newTodo;
let toggleNewTodo=true;

//Display or hide the Add New Todo
plusButton.addEventListener("click", ()=>{
    if(toggleNewTodo)
    input_div.style.display="none";
    else
    input_div.style.display="flex";
    toggleNewTodo=!toggleNewTodo;
});

//Applying border to 'Add New Todo' when in focus
input.addEventListener("focus",()=>{
    input_div.classList.add("content__add-focus");
});

//Removing border to 'Add New Todo' when blurred
input.addEventListener("blur",()=>{
    input_div.classList.remove("content__add-focus");
});

//Retrieve value when ENTER key is pressed
input.addEventListener("keydown",event=>{
    if(event.keyCode===13)
    {
        nnewTodo=input.value;
        input.value=null;
    }
    
});

//Sliding in and out the delete button
for(let i=0;i<todoDiv.length;i++)
{
    todoDiv[i].addEventListener("mouseenter",()=>{
        // todoDelete[i].classList.add("")
        todoDiv[i].classList.add("content__todos-delete-mouseIn");
        console.log("Mouse Entered");
    });

    todoDiv[i].addEventListener("mouseleave",()=>{
        todoDiv[i].classList.add("content__todos-delete-mouseOut");
        console.log("Mouse Left");
    });
}



