export default class MainController {
        constructor(model, view) {
            this.model = model;
            this.view = view;

            view.getById('add-task-dialog-btn').addEventListener('click', () => this.view.openDialog('add-task-dialog'));
            view.getById('add-task-submit-btn').addEventListener('click', (e) => this.addTaskFromInput(e));

            view.getById('add-project-dialog-btn').addEventListener('click', () => this.view.openDialog('add-project-dialog'));
            view.getById('add-project-submit-btn').addEventListener('click', (e) => this.addProjectFromInput(e));

                // filter displays
                // toggle task as complete
                // delete task
                // window.addeventlistener('load', getdatafromstorage)


        }
        
        addTaskFromInput = (e) => {
                e.preventDefault(); 

                let { taskName, taskProject, taskDueDate, taskIsImportant, taskIsComplete } = this.view.getTaskFormInput();

                let newTask = this.model.createTask(taskName, taskProject, taskDueDate, taskIsImportant, taskIsComplete);
                let newTaskList = this.model.addTaskToList(newTask);
                this.model.saveTaskListToLocalStorage(newTaskList);
                this.view.resetForm('add-task-form');
                this.view.closeDialog('add-task-dialog');

                console.log('taskList: ', JSON.parse(localStorage.getItem('taskList'))); 
                this.displayTasks();
        }

        addProjectFromInput = (e) => {
                e.preventDefault();
                let formInputs = this.view.getProjectFormInput();
                let newProject = this.model.createProject(formInputs);
                let newProjectList = this.model.addProjectToList(newProject);
                this.model.saveProjectListToLocalStorage(newProjectList)
                this.view.resetForm('add-project-form');
                this.view.closeDialog('add-project-dialog');

                // console.log('project list: ', JSON.parse(localStorage.getItem('projectList'))); 

                this.displayProjects();
        }

        clearDiv(div) {
                while (div.firstChild) {
                    div.removeChild(div.firstChild);
                }
        }

        displayProjects = () => {
                const projectDiv = this.view.getById('project-list');
                this.clearDiv(projectDiv);
                
                const projects = this.model.getListFromLocalStorage('projectList');
                Object.values(projects.ProjectList).forEach(project => {
                        const projectListElement = document.createElement('div');
                        projectListElement.textContent = project.name;
                        projectDiv.appendChild(projectListElement);
                });
        }

        displayTasks = () => {
                const taskListDiv = this.view.getById('task-list');
                this.clearDiv(taskListDiv);

                const taskList = this.model.getListFromLocalStorage('taskList');

                Object.values(taskList.taskList).forEach(task => {
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

                        taskListDiv.appendChild(taskDiv);

                });

        }
}