// app.js

import ProjectList from './projectList.js';
import { saveProjectsToLocalStorage, getProjectsFromLocalStorage } from './storage.js';

export default class App {
    constructor() {
        this.projectList = new ProjectList();
        this.loadProjects();
        this.initEventListeners();
    }

    loadProjects() {
        const storedProjects = getProjectsFromLocalStorage();
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
        saveProjectsToLocalStorage(this.projectList.projects);
    }

    getProjects() {
        return this.projectList.projects;
    }

    initEventListeners() {
        // Event listener for adding a new project
        document.getElementById('addProjectButton').addEventListener('click', () => {
            console.log('test test')
            const projectName = document.getElementById('projectNameInput').value;
            if (projectName) {
                console.log(projectName);
                this.addProject(projectName);
                this.renderProjects();
            }
        });

        // Event listener for adding a new task (this would need to be updated to reflect how you structure your HTML)
        document.addEventListener('click', (event) => {
            if (event.target && event.target.classList.contains('addTaskButton')) {
                const projectId = event.target.dataset.projectId;
                const taskName = event.target.previousElementSibling.value;
                if (taskName) {
                    this.addTaskToProject(projectId, taskName);
                    this.renderProjects();
                }
            }
        });
    }

    renderProjects() {
        const projectContainer = document.getElementById('projectContainer');
        projectContainer.innerHTML = '';
        this.getProjects().forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <input type="text" placeholder="New Task">
                <button class="addTaskButton" data-project-id="${project.id}">Add Task</button>
                <ul>
                    ${project.tasks.map(task => `<li>${task.name}</li>`).join('')}
                </ul>
            `;
            projectContainer.appendChild(projectElement);
        });
    }
}
