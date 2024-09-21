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

projects.push({ name: "general", tasks: [] })
domController.addProjectToUI(getProject("general"));

projects.push({ name: "project1", tasks: [] })
domController.addProjectToUI(getProject("project1"));

getProject("general").tasks.push(todo("read", "30 pages", new Date(), true));
