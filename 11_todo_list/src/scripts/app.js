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

    addTaskToProject(projectId, taskName) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.addTask(taskName);
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
    createTaskListElement(tasks) {
        const ul = document.createElement('ul');
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;
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
        
        const taskListElement = this.createTaskListElement(project.tasks);
        div.appendChild(taskListElement);
        
        return div;
    }

    clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
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

        // Add task to project
        document.getElementById('taskForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
        
            const taskName = document.getElementById('taskInput').value.trim();
        
            if (taskName === '') {
                return;
            }
        
            const newTaskElement = this.createTaskElement(taskName);
        
            const taskList = document.getElementById('taskList');
            taskList.appendChild(newTaskElement);
        
            // Clear form field
            document.getElementById('taskInput').value = '';
        });
    }

    renderProjects() {
        const projectListContainer = document.getElementById('projectList');
        console.log(projectListContainer);
        this.clearElement(projectListContainer);
    
        const projects = Storage.getProjects(); 
    
        projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            projectListContainer.appendChild(projectElement);
        });
    }
}
