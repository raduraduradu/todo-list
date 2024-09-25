import "./style.css";
import {domController} from "./domController.js";

const todo = function (name, description, dueDate, important) {
    const done = false;
    const toggleDone = () => {
        done = !done;
    }

    const togglePriority = () => {
        important = !important;
    }

    return {name, description, dueDate, important, toggleDone, togglePriority}
}

const project = (name) => {
    let tasks = [];
    return {name, tasks}
}

let projects = [];
let getProject = (name) => {
    return projects.find((p) => p["name"] == name);
}

const projectModal = document.querySelector("#project-modal");
document.querySelector("#add-project").onclick = () => {
    projectModal.showModal();
}

const projectForm = document.querySelector("#project-modal form");
projectForm.onsubmit = (e) => {

    let projectName = projectForm["project-name"].value;

    if(projectName.replace(/\s/g, "").length === 0) {
        e.preventDefault();
        alert("invalid input");
    }
    if(getProject(projectName) !== undefined) {
        e.preventDefault();
        alert("Project name already taken");
    }

    else {
        projects.push(project(projectName));
        domController.addProjectToUI(getProject(projectName));
    }
}




const taskModal = document.querySelector("#task-modal");
document.querySelector("#add-task").onclick = () => {
    taskModal.showModal();
}

const taskForm = document.querySelector("#task-modal form");
taskForm.onsubmit = (e) => {
    //undone
    let submittedTask = todo(taskForm["task-name"].value,
        taskForm["description"].value,
        taskForm["date"].value,
        taskForm["important"].value);

    getProject(taskForm["select-project"].value).tasks.push(submittedTask);

    domController.addTaskToUI(submittedTask, taskForm["select-project"].value);
}


///////

//example projects and todos, manually inserted

projects.push(project("general"));
domController.addProjectToUI(getProject("general"));

projects.push(project("project1"));
domController.addProjectToUI(getProject("project1"));

getProject("general").tasks.push(todo("read", "30 pages", new Date(), true));
