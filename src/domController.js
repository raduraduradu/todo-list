const domController = (function () {
    const sidebar = document.querySelector("#sidebar");
    const tasksContainer = document.querySelector("#tasks-container #content");

    let projectContents = {};

    const addProjectToUI = (project) => {
        projectContents[project["name"]] = document.createElement("div");

        let projectOption = document.createElement("option");
        projectOption.textContent = project["name"];
        projectOption.value = project["name"];
        document.querySelector("#task-modal select").appendChild(projectOption)

        let btn = document.createElement("button");
        btn.textContent = project["name"];
        btn.onclick = () => {
            tasksContainer.innerHTML = '';
            tasksContainer.appendChild(projectContents[project["name"]]);
        }
        sidebar.appendChild(btn);
    }

    const addTaskToUI = (task, projectName) => {
        //undone
        let container = document.createElement("div");
        container.classList.add("task");

        let h2 = document.createElement("h2");
        h2.textContent = task.name;
        container.appendChild(h2);

        let p = document.createElement("p");
        p.textContent = task.description;
        container.appendChild(p);

        let p2 = document.createElement("p");
        p2.textContent = `Due ${task.dueDate}`;
        container.appendChild(p2);

        console.log(projectContents);
        projectContents[projectName].appendChild(container);
    }

    return {addProjectToUI, addTaskToUI, projectContents}
})();

export {domController};
