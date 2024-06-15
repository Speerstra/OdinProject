import TaskView from "./taskView";
import ProjectView from "./projectView";

export default class MainView {

        getById(id) {
                return document.getElementById(id);
        }

        getTaskFormField(name) {
            return this.getById('add-task-form').elements[name].value;
        }

        getTaskFormInput() {
                const taskName = this.getTaskFormField('task-name');
                const taskProject = this.getTaskFormField('task-project');
                const taskDueDate = this.getTaskFormField('task-dueDate');
                const taskIsImportant= this.getTaskFormField('task-isImportant');

                return {taskName, taskProject, taskDueDate, taskIsImportant}
        }

        resetForm(formID) {
                this.getById(formID).reset();
        }
    }