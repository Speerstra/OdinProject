import TaskView from "./taskView";
import ProjectView from "./projectView";

export default class MainView {

        getById(id) {
                return document.getElementById(id);
        }

        getFormField(formId, fieldName) {
                const form = this.getById(formId);
                return form.elements[fieldName].value;
        }

        getTaskFormInput() {
                const taskName = this.getFormField('add-task-form', 'task-name');
                const taskProject = this.getFormField('add-task-form', 'task-project');
                const taskDueDate = this.getFormField('add-task-form', 'task-dueDate');
                const taskIsImportant = this.getFormField('add-task-form', 'task-isImportant');
                
                return { taskName, taskProject, taskDueDate, taskIsImportant };
        }

        getProjectFormInput() {
                return this.getFormField('add-project-form', 'project-name');
        }

        resetForm(formID) {
                let form = this.getById(formID);
                if (form) {
                        form.reset();
                    }
        }

        openDialog = (dialogId) => {
                this.getById(dialogId).showModal();
        };   

        closeDialog = (dialogId) => {
                this.getById(dialogId).close();
        };  


    }