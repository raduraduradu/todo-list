import {deleteTodo} from "./index.js";
import starSvg from "./assets/star.svg";
import starOutlineSvg from "./assets/star-outline.svg";
import deleteSvg from "./assets/delete.svg";

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

        (function () {
            let label = document.createElement("label");
                
            let checkbox = document.createElement("input");
            checkbox.type = 'checkbox';
            label.appendChild(checkbox);

            let h2 = document.createElement("h2");
            h2.textContent = task.name;
            label.appendChild(h2);
            
            checkbox.onclick = () => {
                h2.classList.toggle("done");
            }

            container.appendChild(label);
        })();

        (function () {
            let p = document.createElement("p");
            p.textContent = task.description;
            container.appendChild(p);

            let p2 = document.createElement("p");
            p2.textContent = `Due ${task.dueDate}`;
            container.appendChild(p2);
        })();

        (function () {
            let div = document.createElement("div")
            div.style.display = "flex";
            div.style.justifyContent = "space-between";
            
            (function () {
                let starIcon = document.createElement("img");
                starIcon.classList.add("star-icon");

                const updateStarIcon = () => {
                    if(task.getImportance() === true) {
                        starIcon.src = starSvg;
                        starIcon.title = "Marked as important";
                    }
                    else {
                        starIcon.src = starOutlineSvg;
                        starIcon.title = "Not marked as important";
                    }
                }
                updateStarIcon();
                starIcon.onclick = () => {
                    task.toggleImportance();
                    updateStarIcon();
                }
                div.appendChild(starIcon);
            })();

            (function () {
                let trashIcon = document.createElement("img");
                trashIcon.classList.add("trash-icon");
                trashIcon.title = "Delete task";
                trashIcon.src = deleteSvg;
                trashIcon.onclick = () => {
                    deleteTodo(task.getId());
                    container.remove();
                }
                div.appendChild(trashIcon);
            })();
            container.appendChild(div);
        })();

        console.log(projectContents);
        projectContents[projectName].appendChild(container);
    }

    return {addProjectToUI, addTaskToUI, projectContents}
})();

export {domController};
