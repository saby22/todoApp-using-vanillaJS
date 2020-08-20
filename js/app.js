/*get all the elements from the DOM*/
const plusButton=document.querySelector(".content__header i")
const input_div=document.querySelector(".content__add");
const input=document.querySelector("input");
const todoDiv=document.querySelectorAll(".content__todos");
const todoDelete=document.querySelectorAll(".content__todos-delete");
const todo=document.querySelectorAll(".content__todos h3");
const todoLi=document.querySelectorAll("li");
const todoUl=document.querySelector("ul");

/*Variables*/
let newTodo;
let toggleNewTodo=true;
let numberOfTodos;
let characterPermit=true;
let newTodoElement=document.createElement("li");

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
}

//Change the color of the todos
const colorChange= ()=>{
    countTodo();
    let newList=document.querySelectorAll("li .content__todos");
    for (let i=0;i<numberOfTodos;i++){
        if(i%2===0){
            classRemove(newList[i],"content__todos-bgGray");
            classAdd(newList[i],"content__todos-bgWhite");
            // newList[i].classList.remove("content__todos-bgGray");
            // newList[i].classList.add("content__todos-bgWhite");
        }
        
        else{
            classRemove(newList[i],"content__todos-bgWhite");
            classAdd(newList[i],"content__todos-bgGray");
            // newList[i].classList.remove("content__todos-bgWhite");
            // newList[i].classList.add("content__todos-bgGray");
        } 
    }
}

const onMouseEnter = ()=>{
    if(classExists(todoDelete[i],"content__todos-delete-mouseOut"))
        classRemove(todoDelete[i],"content__todos-delete-mouseOut");
        
    classAdd(todoDelete[i],"content__todos-delete-mouseIn");
};

const onMouseLeave = ()=>{
    if(classExists(todoDelete[i],"content__todos-delete-mouseIn"))
        classRemove(todoDelete[i],"content__todos-delete-mouseIn");

    classAdd(todoDelete[i],"content__todos-delete-mouseOut");
};

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
input.addEventListener("keyup",event=>{

    //the input string should not exceed 31 characcters
    if(input.value.length>31){
        document.querySelector(".fa-exclamation-triangle").style.opacity='1';
        characterPermit=false;
    }
    else{
        document.querySelector(".fa-exclamation-triangle").style.opacity='0';
        characterPermit=true;
    }


    if(event.keyCode===13 && characterPermit===true){
        newTodo=input.value;
        input.value=null;
        if(newTodo!=""){
            newTodoElement.innerHTML=`<div class="content__todos">
            <div class="content__todos-delete">
                <div>
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>
            <h3>${newTodo}</h3>
            </div>`;
            todoUl.appendChild(newTodoElement.cloneNode(true));
            countTodo();
            
            let newList=document.querySelectorAll("li .content__todos");
            
//             const newDiv=document.querySelectorAll(".content__todos");;

//             for(let i=0;i<todoDiv.length;i++)
//             {
//                 newDiv[i].addEventListener("mouseenter",()=>{

//         if(classExists(todoDelete[i],"content__todos-delete-mouseOut"))
//         classRemove(todoDelete[i],"content__todos-delete-mouseOut");
        
//         classAdd(todoDelete[i],"content__todos-delete-mouseIn");

//         //console.log(`Mouse Entered ${i}`);
//     });

//     todoDiv[i].addEventListener("mouseleave",()=>{

//         if(classExists(todoDelete[i],"content__todos-delete-mouseIn"))
//         classRemove(todoDelete[i],"content__todos-delete-mouseIn");

//         classAdd(todoDelete[i],"content__todos-delete-mouseOut");
//         //console.log(`Mouse Left ${i}`);
//     });
// }
            if(numberOfTodos%2==0)
            classAdd(newList[numberOfTodos-1],"content__todos-bgGray");
            else
            classAdd(newList[numberOfTodos-1],"content__todos-bgWhite");  
        }
    }
    
});

//Sliding in and out the delete button
// for(let i=0;i<todoDiv.length;i++)
// {
//     todoDiv[i].addEventListener("mouseenter",()=>{

//         if(classExists(todoDelete[i],"content__todos-delete-mouseOut"))
//         classRemove(todoDelete[i],"content__todos-delete-mouseOut");
        
//         classAdd(todoDelete[i],"content__todos-delete-mouseIn");

//         //console.log(`Mouse Entered ${i}`);
//     });

//     todoDiv[i].addEventListener("mouseleave",()=>{

//         if(classExists(todoDelete[i],"content__todos-delete-mouseIn"))
//         classRemove(todoDelete[i],"content__todos-delete-mouseIn");

//         classAdd(todoDelete[i],"content__todos-delete-mouseOut");
//         //console.log(`Mouse Left ${i}`);
//     });
// }

//Add and remove strikethrough to the clicked todo
// for(let i=0;i<todo.length;i++){

//     todo[i].addEventListener("click",()=>{

//         if(todo[i].style.textDecoration==="line-through"){
//             todo[i].style.textDecoration="none";
//             todo[i].style.opacity=1;
//         }
        
//         else{
//             todo[i].style.textDecoration="line-through";
//             todo[i].style.opacity=0.5;
//         }
//     });
// }

//Deleting todos
// for(let i=0;i<todo.length;i++){

//     todoDelete[i].addEventListener("click",()=>{
//         console.log("Clicked");
//         //delete the ith li
//         todoUl.removeChild(todoLi[i]);
//         colorChange();
//     });

// };

document.querySelector(".content").addEventListener("click",function(e){

    //console.dir(e.target.closest("h3"));

    //Get the Todo text
    const todoText=e.target.closest("h3");
    //Add and remove strikethrough to the clicked todo
    if(todoText!=null){
        if(todoText.style.textDecoration==="line-through"){
            todoText.style.textDecoration="none";
            todoText.style.opacity=1;
        }
        else{
            todoText.style.textDecoration="line-through";
            todoText.style.opacity=0.5;
        }
    }

    
    

});

document.querySelector("ul").addEventListener("click",function(e){

    //console.dir(e.target.closest("h3"));

    //Get the Todo text
    const newLi = e.target.closest(".content__todos-delete");
    //Add and remove strikethrough to the clicked todo
    if(newLi!=null){

        // newLi.parentElement.removeChild(newLi);
        // console.dir(newLi);
        console.dir(newLi.parentNode.parentNode.parentNode.removeChild(newLi.parentNode.parentNode));
    }

    colorChange();
    
    

});



document.querySelector(".content").addEventListener("mouseover",function(e){

    //console.dir(e.target.closest("div").children[0]);
    const divTodo=e.target.closest(".content__todos").children[0];
    //console.dir(divTodo);
    
    if(classExists(divTodo,"content__todos-delete-mouseOut"))
        classRemove(divTodo,"content__todos-delete-mouseOut");

    classAdd(divTodo,"content__todos-delete-mouseIn");

    

});

document.querySelector(".content").addEventListener("mouseout",function(e){

    //console.dir(e.target.closest("div").children[0]);
    const divTodo=e.target.closest(".content__todos").children[0];
    //console.dir(divTodo);
    
    if(classExists(divTodo,"content__todos-delete-mouseIn"))
        classRemove(divTodo,"content__todos-delete-mouseIn");

    classAdd(divTodo,"content__todos-delete-mouseOut");

    

});



