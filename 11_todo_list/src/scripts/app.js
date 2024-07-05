import ProjectList from './projectList.js';
import Storage from './storage.js';

export default class App {
    constructor() {
        this.projectList = new ProjectList();
        this.loadProjects();
        this.initEventListeners();
    }

    loadProjects() {
        const storedProjects = Storage.getProjects();
        this.projectList.projects = storedProjects;
    }

    addProject(projectName) {
        this.projectList.addProject(projectName);
        this.saveProjects();
    }

    deleteProject(projectID) {
        console.log('delete project!')
        this.projectList.deleteProject(projectID);
        this.saveProjects();
        this.renderProjects();
    }

    addTaskToProject(projectId, taskName) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.addTask(taskName);
            this.saveProjects();
        }
    }

    deleteTaskFromProject(projectId, taskId) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.deleteTask(taskId);
            this.saveProjects();
        }
    }

    saveProjects() {
        Storage.saveProjects(this.projectList.projects);
    }

    getProjects() {
        return this.projectList.projects;
    }



    // DOM Elements
    createTaskListElement(project) {
        const ul = document.createElement('ul');
        const tasks = project.tasks
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;

            const deleteTaskButton = document.createElement('button');
            deleteTaskButton.textContent = 'delete Task';
            deleteTaskButton.addEventListener('click', () => {
                this.deleteTaskFromProject(project.id, task.id); 
                this.renderProjects(); 
            });

            li.appendChild(deleteTaskButton)

            
            ul.appendChild(li);
        });
        return ul;
    }


    createProjectElement(project) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${project.name}</h3>
            <h4>Tasks:</h4>
        `;
        
        const taskListElement = this.createTaskListElement(project);
        div.appendChild(taskListElement);
    
        div.appendChild(this.createAddTaskForm(project));
    
        const deleteProjectButton = document.createElement('button')
        deleteProjectButton.innerHTML = 'X';
        deleteProjectButton.classList.add('delete-project-button');
        deleteProjectButton.setAttribute('data-project-id', project.id)
        deleteProjectButton.addEventListener('click', () => {
            this.deleteProject(project.id);
        })
        div.appendChild(deleteProjectButton)
    
        return div;
    }

    createAddTaskForm(project) {
        const addTaskForm = document.createElement('form');
        addTaskForm.innerHTML = `
            <input type="text" placeholder="Enter task name" id="taskInput">
            <button type="submit">Add Task</button>
        `;
        addTaskForm.classList.add('taskForm');
        
        addTaskForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const taskName = document.getElementById('taskInput').value.trim();
            if (taskName === '') {
                return;
            }
        
            this.addTaskToProject(project.id, taskName);
            document.getElementById('taskInput').value = '';
            this.renderProjects();
        });
    
        return addTaskForm;
    }



    clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    renderProjects() {
        const projectListContainer = document.getElementById('projectList');

        this.clearElement(projectListContainer);
    
        const projects = Storage.getProjects(); 
    
        projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            projectListContainer.appendChild(projectElement);
        });
    }


    // Event Listeners
    initEventListeners() {

        // Add project
        document.getElementById('addProjectButton').addEventListener('click', () => {
            const projectName = document.getElementById('projectNameInput').value;
            if (projectName) {
                this.addProject(projectName);
                this.renderProjects();
            }
        });
    }
}
