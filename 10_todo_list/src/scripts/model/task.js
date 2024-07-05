import { v4 as uuidv4 } from 'uuid';

export default class Task 
{
        constructor(name, dueDate, isImportant, isComplete) {
                this.id = uuidv4();
                this.name = name;
                this.dueDate = dueDate;
                this.isImportant = isImportant;
                this.isComplete = isComplete;
        }

        isImportant () {
                return this.isImportant;
        }

        toggleImportant () {
                this.isImportant == false
                    ? this.isImportant = true
                    : this.isImportant = false
        }
        
        isComplete () {
                return this.isComplete;
        }

        toggleComplete () {
                this.isComplete == false
                    ? this.isComplete = true
                    : this.isComplete = false
        }
} 
