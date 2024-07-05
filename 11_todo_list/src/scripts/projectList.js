// projectList.js

import Project from './project.js';

export default class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject(projectName) {
        const project = new Project(projectName);
        this.projects.push(project);
    }

    findProject(projectId) {
        return this.projects.find(project => project.id === parseInt(projectId));
    }
}
