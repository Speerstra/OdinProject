import TaskView from "./taskView";
import ProjectView from "./projectView";

export default class MainView {

        getById(id) {
                return document.getElementById(id);
        }

        getFormField(formId, fieldName) {
                const form = this.getById(formId);
                return form.elements[fieldName].value;
        }

        getTaskFormInput() {
                const taskName = this.getFormField('add-task-form', 'task-name');
                const taskProject = this.getFormField('add-task-form', 'task-project');
                const taskDueDate = this.getFormField('add-task-form', 'task-dueDate');
                const taskIsImportant = this.getById('add-task-form').elements['task-isImportant'].checked;
                
                return { taskName, taskProject, taskDueDate, taskIsImportant };
        }

        getProjectFormInput() {
                return this.getFormField('add-project-form', 'project-name');
        }
        
        clearDiv(div) {
                while (div.firstChild) {
                        div.removeChild(div.firstChild);
                }
        }

        resetForm(formID) {
                let form = this.getById(formID);
                if (form) {
                        form.reset();
                    }
        }

        openDialog = (dialogId) => {
                this.getById(dialogId).showModal();
        };   

        closeDialog = (dialogId) => {
                this.getById(dialogId).close();
        };  

        generateProjectDiv = (project) => {
                const projectDiv = document.createElement('div');
                projectDiv.textContent = project.name;
                return projectDiv;
        }

        generateTaskDiv = (task) => {
                const taskDiv = document.createElement('div');
                        
                const taskName = document.createElement('div');
                taskName.textContent = task.name;
                taskDiv.appendChild(taskName);

                const taskDueDate = document.createElement('div');
                taskDueDate.textContent = task.dueDate;
                taskDiv.appendChild(taskDueDate);
                
                taskDiv.classList.add(task.isImportant ? 'task-important' : null);

                if (task.isImportant) {
                        const importantDiv = document.createElement('div');
                        importantDiv.textContent = '⭐';
                        importantDiv.classList.add('important-star');
                        taskDiv.appendChild(importantDiv);
                }

                const deleteTaskBtn = document.createElement('button');
                deleteTaskBtn.classList.add('delete-task-btn');
                deleteTaskBtn.innerText = 'delete';
                // deleteTaskBtn.dataset.taskId = task.id;
                deleteTaskBtn.addEventListener('click', function() {
                        console.log(task.id)
                        const taskList = this.controller.deleteTask(task.id);
                        taskDiv.remove();
                        localStorage.setItem('taskList', JSON.stringify(taskList));
                });
                taskDiv.appendChild(deleteTaskBtn);

                return taskDiv;
        }
    }