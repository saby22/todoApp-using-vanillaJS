/*get all the elements from the DOM*/
const plusButton=document.querySelector(".content__header i")
const input_div=document.querySelector(".content__add");
const input=document.querySelector("input");
const todoDiv=document.querySelectorAll(".content__todos");
const todoDelete=document.querySelectorAll(".content__todos-delete");
const todo=document.querySelectorAll(".content__todos h3");

/*Variables*/
let newTodo;
let toggleNewTodo=true;
let numberOfTodos;

/*Functions*/

//to add a class
const classAdd = (target,className)=>{
    target.classList.add(className);
}

//to remove a class
const classRemove = (target,className)=>{
    target.classList.remove(className);
};

//to add style
const addStyle = (target,cssProperty,value)=>{
    target.style.cssProperty=value;
};

//to check if a class exists
const classExists = (target,className)=>{
    if(target.classList.contains(className))
    return true;
    else
    return false;
};

//count the number of Todos
const countTodo= ()=>{
    numberOfTodos=document.querySelectorAll(".content__todos").length;
    console.log(numberOfTodos);
}
/*---------------------------------------*/

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
    classAdd(input_div,"content__add-focus");
});

//Removing border to 'Add New Todo' when blurred
input.addEventListener("blur",()=>{
    classRemove(input_div,"content__add-focus");
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

        if(classExists(todoDelete[i],"content__todos-delete-mouseOut"))
        classRemove(todoDelete[i],"content__todos-delete-mouseOut");
        
        classAdd(todoDelete[i],"content__todos-delete-mouseIn");

        console.log(`Mouse Entered ${i}`);
    });

    todoDiv[i].addEventListener("mouseleave",()=>{

        if(classExists(todoDelete[i],"content__todos-delete-mouseIn"))
        classRemove(todoDelete[i],"content__todos-delete-mouseIn");

        classAdd(todoDelete[i],"content__todos-delete-mouseOut");
        console.log(`Mouse Left ${i}`);
    });
}

//Add and remove strikethrough to the clicked todo
for(let i=0;i<todoDiv.length;i++){

    todo[i].addEventListener("click",()=>{

        if(todo[i].style.textDecoration==="line-through")
        todo[i].style.textDecoration="none";
        else
        todo[i].style.textDecoration="line-through";
        
        //addStyle(todo[i],textDecoration,"line-through");
    });
}


