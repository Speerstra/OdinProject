// project.js

import Task from './task.js';

export default class Project {
    constructor(name) {
        this.id = new Date().getTime();
        this.name = name;
        this.tasks = [];
    }

    addTask(taskName) {
        const task = new Task(taskName);
        this.tasks.push(task);
    }
}
