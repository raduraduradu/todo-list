import "./style.css";
import {domController} from "./domController.js";
import { format, formatDistance } from "date-fns";

const todo = function (name, description, dueDate, importance) {
    
    dueDate = `${formatDistance(dueDate, Date.now(), {addSuffix: true})} (${format(dueDate, 'MM/dd/yyyy')})`;

    /*let done = false;
    const toggleDone = () => {
        done = !done;
    }*/
    
    const getImportance = () => {
        return importance;
    }

    const toggleImportance = () => {
        importance = !importance;
    }

    return {name, description, dueDate, getImportance, toggleImportance}
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
document.querySelector("#project-form-cancel").onclick = () => {
    projectModal.close();
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
document.querySelector("#task-form-cancel").addEventListener("click", () => {
    taskModal.close();
});

const taskForm = document.querySelector("#task-modal form");
taskForm.onsubmit = (e) => {
    let important = document.querySelector("#task-modal #important").checked
    let submittedTask = todo(taskForm["task-name"].value,
        taskForm["description"].value,
        taskForm["date"].value,
        important);

    getProject(taskForm["select-project"].value).tasks.push(submittedTask);

    domController.addTaskToUI(submittedTask, taskForm["select-project"].value);
}


///////

//example projects and todos, manually inserted

projects.push(project("general"));
domController.addProjectToUI(getProject("general"));

projects.push(project("project1"));
domController.addProjectToUI(getProject("project1"));

let task1 = todo("read", "30 pages", new Date(), true);
getProject("general").tasks.push(task1);
domController.addTaskToUI(task1, getProject("general").name);
