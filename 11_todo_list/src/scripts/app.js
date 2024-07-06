import ProjectList from './projectList.js';
import Storage from './storage.js';
import DOMElements from './domElements.js';


export default class App {
    constructor() {
        this.projectList = new ProjectList();
        this.domElements = new DOMElements(
            this.addTaskToProject.bind(this),
            this.deleteProject.bind(this),
            this.deleteTaskFromProject.bind(this),
            this.toggleTaskComplete.bind(this)
        );
        this.loadProjects();
        this.initEventListeners();
        this.renderProjects();
    }

    loadProjects = () => {
        this.projectList.projects = Storage.getProjects();
    }

    addProject = (projectName) => {
        this.projectList.addProject(projectName);
        this.saveProjectsAndRender();
    }

    deleteProject = (projectID) => {
        this.projectList.deleteProject(projectID);
        this.saveProjectsAndRender();
    }

    addTaskToProject = (projectId, taskName) => {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.addTask(taskName);
            this.saveProjectsAndRender();
        }
    }

    deleteTaskFromProject = (projectId, taskId) => {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.deleteTask(taskId);
            this.saveProjectsAndRender();
        }
    }

    toggleTaskComplete(projectId, taskId) {
        console.log(this.projectList);
        const project = this.projectList.findProject(projectId);
        console.log(project);
        if (project) {
            const task = project.tasks.find(task => task.id === taskId);
            console.log(`task: ${task.id}`)
            if (task) {
                task.isComplete = !task.isComplete;
                this.saveProjectsAndRender();
            }
        }
    }

    saveProjectsAndRender = () => {
        this.saveProjects();
        this.renderProjects();
    }

    saveProjects = () => {
        Storage.saveProjects(this.projectList.projects);
    }

    renderProjects = () => {
        const projectListContainer = document.getElementById('projectList');
        this.domElements.clearElement(projectListContainer);

        this.projectList.projects.forEach(project => {
            const projectElement = this.domElements.createProjectElement(project);
            projectListContainer.appendChild(projectElement);
        });
    }

    initEventListeners = () => {
        document.getElementById('addProjectButton').addEventListener('click', () => {
            const projectNameInput = document.getElementById('projectNameInput');
            const projectName = projectNameInput.value.trim();
            if (projectName) {
                this.addProject(projectName);
                projectNameInput.value = '';
            }
        });
    }
}
