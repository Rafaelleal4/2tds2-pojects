class Task{
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList{
    constructor(teste){
        this.tasks = [];
    }
    addTask(param){
        this.tasks.push(param);
    }
    teste(){
        console.log()
    }
}

function randomId(){
    return Math.floor(Math.random() * 9998) + 1;
}

function clearInput(){
    document.getElementById("taskInput").value = "";
}


const taskList = new TaskList();


function createTask(){
    const title = document.getElementById("taskInput").value;
    console.log(title)
    const task = new Task(randomId(),title,false);
    taskList.addTask(task);

    publishTask();
    clearInput();
}

function publishTask(){
    document.getElementById("publish").classList.remove("hidden");

    let msg = '';

    taskList.tasks.forEach(task => {
        msg += `
        <div id="backs2" >
        <div class="card">
            <p>${task.title}</p>
            <div id="actionButtons">
                <button type="button" id="check" id="check-${task.id}"><i class="fa-solid fa-check-double"></i></button>
                <button type="button" id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" id="trash"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    </div>
        `
    });

    document.getElementById("publish").innerHTML = msg;

}