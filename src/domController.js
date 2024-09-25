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
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.textContent = task.name;
        div.appendChild(h3);

        console.log(projectContents);
        projectContents[projectName].appendChild(div);
    }

    return {addProjectToUI, addTaskToUI, projectContents}
})();

export {domController};
