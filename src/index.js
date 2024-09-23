import "./style.css";
import {domController} from "./domController.js";

const todo = function (title, description, dueDate, important) {
    const done = false;
    const toggleDone = () => {
        done = !done;
    }

    const togglePriority = () => {
        important = !important;
    }

    return {title, description, dueDate, important, toggleDone, togglePriority}
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

    else {
        projects.push({
            name: projectName,
            tasks: []
        })
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
}


///////

//example projects and todos, manually inserted

projects.push({ name: "general", tasks: [] })
domController.addProjectToUI(getProject("general"));

projects.push({ name: "project1", tasks: [] })
domController.addProjectToUI(getProject("project1"));

getProject("general").tasks.push(todo("read", "30 pages", new Date(), true));
