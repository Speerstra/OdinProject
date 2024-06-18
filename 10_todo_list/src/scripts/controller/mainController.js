export default class MainController {
        constructor(model, view) {
            this.model = model;
            this.view = view;
    
            view.getById('add-task-dialog-btn').addEventListener('click', () => this.view.openDialog('add-task-dialog'));
            view.getById('add-task-submit-btn').addEventListener('click', this.addTaskFromInput);
            view.getById('add-project-dialog-btn').addEventListener('click', () => this.view.openDialog('add-project-dialog'));
            view.getById('add-project-submit-btn').addEventListener('click', this.addProjectFromInput);

    
            // Filter displays
            // toggle task as complete
            // delete task
            // window.addeventlistener('load', getdatafromstorage)
        }
    
        addTaskFromInput = (e) => {
                e.preventDefault();
                
                let { taskName, taskProject, taskDueDate, taskIsImportant, taskIsComplete } = this.view.getTaskFormInput();
        
                let newTask = this.model.createTask(taskName, taskProject, taskDueDate, taskIsImportant, taskIsComplete);
                console.log(newTask);
                
                this.model.addTaskToList(newTask);
        
                this.view.resetForm('add-task-form');
                this.view.closeDialog('add-task-dialog');
        
                this.displayTasks();
        }
    
        deleteTaskcontrol(id) {
                this.model.deleteTask(id);
                this.displayTasks();
        }
    
        displayTasks = () => {
                const taskListDiv = this.view.getById('task-list');
                this.view.clearDiv(taskListDiv);
        
                const taskList = this.model.getLocalStorage('taskList');
                console.log(taskList)
                Object.entries(taskList.taskList).forEach(([taskId, task]) => {

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
                        // Arrow function to retain 'this' context
                        deleteTaskBtn.addEventListener('click', () => {
                        this.deleteTaskcontrol(task.id);
                        taskDiv.remove();
                        localStorage.setItem('taskList', JSON.stringify(taskList));
                        });
                        taskDiv.appendChild(deleteTaskBtn);
                        taskListDiv.appendChild(taskDiv);
                });
                
        }

        addProjectFromInput = (e) => {
                e.preventDefault();
                let formInputs = this.view.getProjectFormInput();
                let newProject = this.model.createProject(formInputs);
                let newProjectList = this.model.addProjectToList(newProject);
                this.model.setLocalStorage('projectList', newProjectList)
                this.view.resetForm('add-project-form');
                this.view.closeDialog('add-project-dialog');
        
                this.displayProjects();
        }

        displayProjects = () => {
                const projectListDiv = this.view.getById('project-list');
                this.view.clearDiv(projectListDiv);
        
                const projects = this.model.getLocalStorage('projectList');
        
                Object.values(projects.ProjectList).forEach(project => {

                        const projectDiv = this.view.generateProjectDiv(project);
                        projectListDiv.appendChild(projectDiv);
                });
        }
}
    