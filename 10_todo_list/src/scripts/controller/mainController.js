export default class MainController
{
        constructor(model, view)
        {
                this.model = model;
                this.view = view;

                document.getElementById('addFormSubmitBtn').addEventListener('click', (e) => this.handleAddFormSubmit(e));
        }

        handleAddFormSubmit() {
                var testObject = this.model.createTask('name', 'description', 'project', 'dueDate', 'isImportant', 'isComplete')

                // Put the object into storage
                localStorage.setItem('testObject', JSON.stringify(testObject));
                
                // Retrieve the object from storage
                var retrievedObject = localStorage.getItem('testObject');
                
                console.log('retrievedObject: ', JSON.parse(retrievedObject));                
        }
};