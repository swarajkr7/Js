const toDoList=[
    {
        name:'make dinner',
        dueDate: '2026-01-24'
    },
    {
        name:'wash dishes',
        dueDate: '2026-01-24'
    }
];


renderToDOList();

function renderToDOList(){
    let  toDoListHTML='';


        toDoList.forEach((todoObject,index)=>{
            const {name, dueDate}=todoObject; //Destructuring
            const html=`
            <div>${name}</div>
            <div>${dueDate}</div> 
            <button 
            class="delete-todo-button js-delete-todo-button";>
            Delete
            </button>
            `;

            toDoListHTML+=html;        
        })   
        document.querySelector('.js-toDoList').innerHTML=toDoListHTML;


        //querSelectorAll will select all the class with a given name

        document.querySelectorAll('.js-delete-todo-button')
            .forEach((deleteButton,index)=>{
                deleteButton.addEventListener('click',()=>{
                    toDoList.splice(index,1);
                    renderToDOList();
                })
            })
         
}

document.querySelector('.js-add-toDo-button').addEventListener('click',()=>{
    addToDo();
});

function addToDo(){
    const task=document.querySelector('.js-name-input');
    const name =task.value;
    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateInputElement.value;
    toDoList.push(
        {
            // name:name,
            // dueDate:dueDate
            name,
            dueDate//shorthand property
        }
    );
    console.log(toDoList);
    task.value='';
    renderToDOList();

}