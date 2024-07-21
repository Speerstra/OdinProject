import DateElement from "./dateElement.js";

export default class DOMElements {
  constructor(
    addProjectCallback,
    addTaskCallback,
    deleteProjectCallback,
    deleteTaskCallback,
    toggleTaskCallback,
    updateProjectNameCallback,
    updateTaskNameCallback,
    updateTaskDueDateCallback
  ) {
    this.addProjectCallback = addProjectCallback;
    this.addTaskCallback = addTaskCallback;
    this.deleteProjectCallback = deleteProjectCallback;
    this.deleteTaskCallback = deleteTaskCallback;
    this.toggleTaskCallback = toggleTaskCallback;
    this.updateProjectNameCallback = updateProjectNameCallback;
    this.updateTaskNameCallback = updateTaskNameCallback;
    this.updateTaskDueDateCallback = updateTaskDueDateCallback;
  }

  renderProjects(projects) {
    const projectListElement = document.getElementById("project-list");
    this.clearElement(projectListElement);

    projects.forEach((project) => {
      const projectElement = this.createProjectElement(project);
      projectListElement.appendChild(projectElement);
    });
  }

  clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  handleKeyDown(event, callback, currentValue, originalValue) {
    if (event.key !== "Enter") return;

    const newValue = currentValue.trim();
    if (newValue && newValue !== originalValue) {
      callback(newValue);
    }
    event.target.blur();
  }

  handleAddProjectForm() {
    const input = document.getElementById("add-project-input");
    input.placeholder = "Start a new project...";
    input.focus();
    input.addEventListener("keydown", (e) => {
      this.handleKeyDown(
        e,
        (newName) => {
          this.addProjectCallback(newName);
          input.value = "";
        },
        input.value,
        ""
      );
    });
  }

  createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.setAttribute("data-project-id", project.id);
    projectElement.setAttribute("data-project-name", project.name);

    const projectHeaderElement = document.createElement("div");
    projectHeaderElement.classList.add("project-header");

    const projectNameElement = this.createProjectName(project);
    projectHeaderElement.appendChild(projectNameElement);

    const deleteProjectButton = this.createDeleteProjectButton(project);
    projectHeaderElement.appendChild(deleteProjectButton);

    projectElement.appendChild(projectHeaderElement);

    const taskListElement = this.createTaskListElement(project);
    projectElement.appendChild(taskListElement);

    const addTaskForm = this.createAddTaskForm(project);
    projectElement.appendChild(addTaskForm);

    return projectElement;
  }

  createProjectName(project) {
    const projectNameElement = document.createElement("input");
    projectNameElement.type = "text";
    projectNameElement.value = project.name;
    projectNameElement.classList.add("project-name");

    projectNameElement.addEventListener("keydown", (e) => {
      this.handleKeyDown(
        e,
        (newProjectName) => {
          this.updateProjectNameCallback(project.id, newProjectName);
        },
        projectNameElement.value,
        project.name
      );
    });

    return projectNameElement;
  }

  createDeleteProjectButton(project) {
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;

    deleteProjectButton.classList.add("delete-project-button");
    deleteProjectButton.addEventListener("click", () => {
      this.deleteProjectCallback(project.id);
    });

    return deleteProjectButton;
  }

  createTaskListElement(project) {
    const ul = document.createElement("ul");
    ul.classList.add("task-list");
    project.tasks.forEach((task) => {
      const li = this.createTaskListItem(project.id, task);
      li.classList.add("task");
      ul.appendChild(li);
    });
    return ul;
  }

  createTaskListItem(projectId, task) {
    const li = document.createElement("li");

    const taskCheckbox = this.createTaskCheckbox(projectId, task);
    taskCheckbox.classList.add("task-checkbox");
    li.append(taskCheckbox);

    const taskNameInput = this.createTaskNameInput(projectId, task);
    li.appendChild(taskNameInput);

    const dueDateElement = DateElement.createDueDateElement(
      projectId,
      task,
      this.updateTaskDueDateCallback
    );
    li.appendChild(dueDateElement);

    const deleteTaskButton = this.createDeleteTaskButton(projectId, task.id);
    li.appendChild(deleteTaskButton);

    return li;
  }

  createTaskCheckbox(projectId, task) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.isComplete;
    checkbox.addEventListener("change", () => {
      this.toggleTaskCallback(projectId, task.id);
    });
    return checkbox;
  }

  createTaskNameInput(projectId, task) {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = task.name;
    nameInput.classList.add("task-name");
    nameInput.disabled = task.isComplete;

    if (task.isComplete) {
      nameInput.classList.add("task-is-complete");
    }

    nameInput.addEventListener("keydown", (e) => {
      this.handleKeyDown(
        e,
        (newName) => {
          this.updateTaskNameCallback(projectId, task.id, newName);
        },
        nameInput.value,
        task.name
      );
    });

    return nameInput;
  }

  createDeleteTaskButton(projectId, taskId) {
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;
    deleteTaskButton.classList.add("delete-task-button");
    deleteTaskButton.addEventListener("click", () => {
      this.deleteTaskCallback(projectId, taskId);
    });
    return deleteTaskButton;
  }

  createAddTaskForm(project) {
    const addTaskElement = document.createElement("div");
    addTaskElement.classList.add("add-task-container");

    const plusIcon = document.createElement("div");
    plusIcon.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="4" width="4" height="16" rx="2" ry="2" fill="currentColor"/>
      <rect x="4" y="10" width="16" height="4" rx="2" ry="2" fill="currentColor"/>
      </svg>
    `;
    plusIcon.classList.add("add-task-plus-icon");
    addTaskElement.appendChild(plusIcon);

    const form = document.createElement("form");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Add a task";
    input.classList.add("task-form");
    form.appendChild(input);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskName = input.value.trim();
      if (taskName) {
        this.addTaskCallback(project.id, taskName);
        input.value = "";
        input.blur();
      }
    });
    addTaskElement.appendChild(form);
    return addTaskElement;
  }
}
