// storage.js

import Project from './project.js';
import Task from './task.js';

// Function to save projects to local storage
export function saveProjectsToLocalStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to retrieve projects from local storage
export function getProjectsFromLocalStorage() {
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
