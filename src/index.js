import "./style.css";

const todo = function (title, description, dueDate, important) {
    const done = false;
    const toggleDone = () => {
        done = !done;
    }

    const togglePriority = () => {
        important = !important;
    }

    return {title, description, dueDate, priority, toggleDone, toggleImportance}
}

let general = [];


general.push(todo("read", "30 pages", new Date(), true));
