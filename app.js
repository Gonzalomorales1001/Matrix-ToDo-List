let taskUL=document.querySelector('#list')
let taskList=JSON.parse(localStorage.getItem('tasks'))||[]
let modal=document.querySelector('#modal')

class Task{
    constructor(id,text,done=false){
        this.id=id
        this.text=text
        this.done=done
    }
}

const ListTasks=()=>{
    coloredColor=document.querySelectorAll('.color')
    coloredBackgrounds=document.querySelectorAll('.background-color')
    coloredBorders=document.querySelectorAll('.border-color')

    taskUL.innerHTML=''

    taskList.forEach(task=>{
        let taskContent=`
            <p class="${task.done?"done":""}">
            ${task.text}
            </p>
            <div class="buttons">
            <button class="border-color color" onclick="deleteTask(${task.id})"><i class="fa-solid fa-xmark"></i></button>
            <button class="border-color color" onclick="openModal(${task.id})"><i class="fa-solid fa-pencil"></i></button>
            </div>`

        let taskLI=document.createElement('li')
        taskLI.innerHTML=taskContent
        taskLI.setAttribute('onclick',`done(${task.id})`)
        taskUL.appendChild(taskLI)
    })
    

    changeColor(selectedColor)
}

const addTask=(event)=>{
    event.preventDefault()
    let taskToAdd=document.querySelector('#taskInput').value
    taskToAdd.trim()
    if(taskToAdd.length>1){
        let newTask=new Task(new Date().getTime(),taskToAdd)
        taskList.push(newTask)
        localStorage.setItem('tasks',JSON.stringify(taskList))
        document.querySelector('#taskInput').value=''
        ListTasks()
    }else{
        alert("Please don't add empty spaces")
        document.querySelector('#taskInput').value=''
    }
}

const deleteTask=(id)=>{
    let indexTask=taskList.findIndex(task=>task.id==id)

    taskList.splice(indexTask,1)
    localStorage.setItem('tasks',JSON.stringify(taskList))
    ListTasks()
}

const done=(id)=>{
    let indexTask=taskList.findIndex(task=>task.id==id)

    taskList[indexTask].done= !taskList[indexTask].done
    localStorage.setItem('tasks',JSON.stringify(taskList))
    ListTasks()
}

const openModal=(id)=>{
    done(id)
    modal.classList.add('show-modal')
    document.querySelector('#editTaskForm').setAttribute('onsubmit',`editTask(event,${id})`)
}
const closeModal=()=>{
    document.querySelector('#editTaskInput').value=''
    modal.classList.remove('show-modal')
}

const editTask=(event,id)=>{
    event.preventDefault()
    let indexTask=taskList.findIndex(task=>task.id==id)
    let newTaskValue=document.querySelector('#editTaskInput').value

    taskList[indexTask].text=newTaskValue
    localStorage.setItem('tasks',JSON.stringify(taskList))
    document.querySelector('#editTaskInput').value=''
    closeModal()
    ListTasks()
}

ListTasks()