export default class DOMElements {
        constructor(addTaskCallback, 
                deleteProjectCallback, 
                deleteTaskCallback,
                toggleTaskCallback) {
                this.addTaskCallback = addTaskCallback;
                this.deleteProjectCallback = deleteProjectCallback;
                this.deleteTaskCallback = deleteTaskCallback;
                this.toggleTaskCallback = toggleTaskCallback;
        }

        
        createTaskListElement(project) {
                const ul = document.createElement('ul');
                project.tasks.forEach(task => {
                        const li = this.createTaskListItem(project.id, task);
                        ul.appendChild(li);
                });
                return ul;
        }

        createTaskListItem(projectId, task) {
                const li = document.createElement('li');

                const taskCheckbox = this.createTaskCheckbox(projectId, task);
                li.append(taskCheckbox)

                const taskName = document.createTextNode(task.name);
                li.appendChild(taskName);

                const deleteTaskButton = this.createDeleteTaskButton(projectId, task.id);
                li.appendChild(deleteTaskButton);
                

                return li;
        }

        createTaskCheckbox(projectId, task) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.isComplete;
                checkbox.addEventListener('change', () => {
                        this.toggleTaskCallback(projectId, task.id);
                });
                return checkbox;
        }

        createDeleteTaskButton(projectId, taskId) {
                const deleteTaskButton = document.createElement('button');
                deleteTaskButton.textContent = 'Delete Task';
                deleteTaskButton.addEventListener('click', () => {
                        this.deleteTaskCallback(projectId, taskId);
                });
                return deleteTaskButton;
        }

        createAddTaskForm(project) {
                const form = document.createElement('form');
                form.classList.add('taskForm');

                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'Enter task name';
                input.id = `taskInput_${project.id}`;

                form.appendChild(input);

                form.addEventListener('submit', (event) => {
                        event.preventDefault();
                        const taskName = input.value.trim();
                        if (taskName) {
                                this.addTaskCallback(project.id, taskName);
                                input.value = '';
                        }
                });

                return form;
        }

        createProjectElement(project) {
                const div = document.createElement('div');
                div.setAttribute('data-project-id', project.id);
                div.setAttribute('data-project-name', project.name);
                div.innerHTML = `
                    <h3>${project.name}</h3>
                    <h4>Tasks:</h4>
                `;

                const taskListElement = this.createTaskListElement(project);
                div.appendChild(taskListElement);

                const addTaskForm = this.createAddTaskForm(project);
                div.appendChild(addTaskForm);

                const deleteProjectButton = document.createElement('button');
                deleteProjectButton.textContent = 'X';
                deleteProjectButton.classList.add('delete-project-button');
                deleteProjectButton.addEventListener('click', () => {
                        this.deleteProjectCallback(project.id);
                });
                div.appendChild(deleteProjectButton);

                return div;
        }
        
        

        clearElement(element) {
                while (element.firstChild) {
                        element.removeChild(element.firstChild);
                }
        }
}
