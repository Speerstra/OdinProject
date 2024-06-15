export default class MainController {
        constructor(model, view) {
            this.model = model;
            this.view = view;
            
            view.getById('add-task-btn').addEventListener('click', () => this.openAddDialog());
            view.getById('add-form-submit-btn').addEventListener('click', (e) => this.addTaskFromInput(e));
            view.getById('add-project-btn').addEventListener('click', (e) => this.openProjectDialog(e));
        // add project
        // delete project
            //  view.getById('addTaskButton').addEventListener('click', dialog.showModal();)
        //  view.getById('closeAddTaskButton').addEventListener('click', dialog.close() and resetForm();)
        //  view.getById('addProjectButton').addEventListener('click', dialog.showModal();)
        //  view.getById('closeAddProjectButton').addEventListener('click', dialog.close() and resetForm();)
        //  filter displays
        //  toggle task as complete
        //  delete task
        // window.addeventlistener('load', getdatafromstorage)


        }
        
        

        openAddDialog = () => {
                const dialog = document.querySelector("dialog");
                dialog.showModal();
        };   

        closeAddDialog = () => {
                const dialog = document.querySelector("dialog");
                dialog.close();
        };  

        addTaskFromInput = (e) => {
            e.preventDefault(); 

            let formInputs = this.view.getTaskFormInput();
            let newTask = this.model.createTask(formInputs);
            let newTaskList = this.model.addTaskToList(newTask);
            this.model.saveTaskListToLocalStorage(newTaskList);
            this.view.resetForm('add-task-form')
            this.closeAddDialog();

            console.log('taskList: ', JSON.parse(localStorage.getItem('taskList'))); 
        //     display tasks()
        }

        openProjectDialog = (e) => {
                e.preventDefault(); 
                console.log('add project')
        }
    }