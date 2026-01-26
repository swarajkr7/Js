const toDoList=[];


renderToDOList();

function renderToDOList(){
    let  toDoListHTML='';

        for(let i=0; i<toDoList.length; i++){
            const todo=toDoList[i];
            const html=`<p>${todo}</p>`;
            toDoListHTML+=html;
        }
        document.querySelector('.js-toDoList').innerHTML=toDoListHTML;
}

function addToDo(){
    const task=document.querySelector('.js-name-input');
    const name =task.value;
    toDoList.push(name);
    console.log(toDoList);
    task.value='';
    renderToDOList();

}