import TaskView from "./taskView";
import ProjectView from "./projectView";

export default class MainView {

        getById(id) {
                return document.getElementById(id);
        }

        getTaskFormValue(name) {
            return this.getById('add-task-form').elements[name].value;
        }

        resetForm(formID) {
                this.getById(formID).reset();
        }
    }