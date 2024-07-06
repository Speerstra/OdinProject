export default class Task {
    constructor(name) {
        this.id = new Date().getTime();
        this.name = name;
        this.dueDate = '';
        this.isComplete = false;
    }

    updateName(newName) {
        this.name = newName;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    toggleComplete() {
        this.isComplete = !this.isComplete;
    }
}
