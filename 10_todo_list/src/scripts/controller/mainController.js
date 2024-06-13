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

            var formInputs = this.getAddFormInputs()

            var testObject = this.model.createTask(formInputs);
    
            localStorage.setItem('testObject', JSON.stringify(testObject));

            var retrievedObject = localStorage.getItem('testObject');
            console.log('retrievedObject: ', JSON.parse(retrievedObject)); 
            
        }
    }