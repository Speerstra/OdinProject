import Project from './project.js';
import Task from './task.js';

export default class Storage {
    static saveProjects(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static getProjects() {
        const projectsData = JSON.parse(localStorage.getItem('projects')) || [];
        return projectsData.map(projectData => {
            const project = new Project(projectData.name);
            project.id = projectData.id;
            project.tasks = projectData.tasks.map(taskData => {
                const task = new Task(taskData.name);
                task.id = taskData.id;
                task.isComplete = taskData.isComplete;
                return task;
            });
            return project;
        });
    }
}

