import { v4 as uuidv4 } from 'uuid';

export default class Task 
{
        constructor(name, project, dueDate, isImportant, isComplete) {
                this.id = uuidv4();
                this.name = name;
                this.project = project;
                this.dueDate = dueDate;
                this.isImportant = isImportant;
                this.isComplete = isComplete;
        }
} 
