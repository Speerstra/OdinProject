// task.js

export default class Task {
        constructor(name) {
            this.id = new Date().getTime();
            this.name = name;
            this.isComplete = false; // Default value is false
        }
    }
    