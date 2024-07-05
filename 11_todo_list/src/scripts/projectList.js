import Project from './project.js';

export default class ProjectList {
    constructor() {
        this.projects = [];
    }

    findProject(projectId) {
        return this.projects.find(project => project.id === parseInt(projectId));
    }

    addProject(projectName) {
        const project = new Project(projectName);
        this.projects.push(project);
    }

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== parseInt(projectId));
    }
}
