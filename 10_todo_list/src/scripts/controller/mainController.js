export default class MainController {
        constructor(model, view) {
            this.model = model;
            this.view = view;
    
            // Attach the event listener using an arrow function
            document.getElementById('addFormSubmitBtn').addEventListener('click', (e) => this.handleAddFormSubmit(e));
        }
        
        getAddFormInputs() {
                const taskName = this.view.getTaskFormValue('task-name');
                const taskDescription = this.view.getTaskFormValue('task-description');
                const taskProject = this.view.getTaskFormValue('task-project');
                const taskDueDate = 'hello'//this.view.getTaskFormValue('task-dueDate');
                const taskIsImportant= 'hello'//this.view.getTaskFormValue('task-isImportant');
                const taskIsComplete = 'hello'//this.view.getTaskFormValue('task-isComplete');

                return {taskName, taskDescription, taskProject, taskDueDate, taskIsImportant, taskIsComplete}
        }
        

        handleAddFormSubmit = (e) => {
            e.preventDefault(); // Prevent the default form submission
    
            // Get the task name from the form
            
        //     console.log(taskName); // Debug: check the task name
            var formInputs = this.getAddFormInputs()
            // Create a task object
            var testObject = this.model.createTask(formInputs);
    
            // Put the object into storage
            localStorage.setItem('testObject', JSON.stringify(testObject));
    
            // Retrieve the object from storage
            var retrievedObject = localStorage.getItem('testObject');
            console.log('retrievedObject: ', JSON.parse(retrievedObject));                
        }
    }