export default class MainController {
        constructor(model, view) {
            this.model = model;
            this.view = view;
    
            view.getById('addFormSubmitBtn').addEventListener('click', (e) => this.handleAddFormSubmit(e));
        }
        
        getAddFormInputs() {
                const taskName = this.view.getTaskFormValue('task-name');
                const taskProject = this.view.getTaskFormValue('task-project');
                const taskDueDate = this.view.getTaskFormValue('task-dueDate');
                const taskIsImportant= this.view.getTaskFormValue('task-isImportant');

                return {taskName, taskProject, taskDueDate, taskIsImportant}
        }
        

        handleAddFormSubmit = (e) => {
            e.preventDefault(); 

            let formInputs = this.getAddFormInputs()
            let newTask = this.model.createTask(formInputs);
            let newTaskList = this.model.addTaskToList(newTask);
            this.model.saveTaskListToLocalStorage(newTaskList);
            this.view.resetForm('add-task-form')

            console.log('taskList: ', JSON.parse(localStorage.getItem('taskList'))); 
        }
    }