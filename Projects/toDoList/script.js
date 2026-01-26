const toDoList=JSON.parse(localStorage.getItem('toDoList'))||[];


renderToDOList();

function renderToDOList(){
    let  toDoListHTML='';

        for(let i=0; i<toDoList.length; i++){
            const todoObject=toDoList[i];
            // const name=todoObject.name;
            // const dueDate=toDoList.dueDate;
            const {name, dueDate}=todoObject; //Destructuring
            const html=`
            <div>${name}</div>
            <div>${dueDate}</div> 
            <button onclick="toDoList.splice(${i},1)
            renderToDOList()";
            class="delete-todo-button";>
            Delete
            </button>`;
            toDoListHTML+=html;
        }
        document.querySelector('.js-toDoList').innerHTML=toDoListHTML;
        localStorage.setItem('toDoList',JSON.stringify(toDoList));
}

function addToDo(){
    const task=document.querySelector('.js-name-input');
    const name =task.value;
    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateInputElement.value;
    const obj={
            // name:name,
            // dueDate:dueDate
            name,
            dueDate//shorthand property
        }
    toDoList.push(obj);
    
    console.log(toDoList);
    task.value='';
    renderToDOList();

}