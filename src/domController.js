const domController = (function () {
    const sidebar = document.querySelector("#sidebar");
    const tasksContainer = document.querySelector("#tasks-container #content");

    let projectContents = {};

    const addProjectToUI = (project) => {
        projectContents[project["name"]] = document.createElement("div");

        let btn = document.createElement("button");
        btn.textContent = project["name"];
        btn.onclick = () => {
            tasksContainer.innerHTML = '';
            tasksContainer.appendChild(projectContents[project["name"]]);
        }
        sidebar.appendChild(btn);
    }

    const addTaskToUI = () => {
        //undone
    }

    return {addProjectToUI, projectContents}
})();

export {domController};
