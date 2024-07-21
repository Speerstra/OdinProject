import { formatDate } from "./date.js";

const DateElement = {
  createDueDateElement(projectId, task, updateTaskDueDateCallback) {
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");

    if (task.dueDate) {
      const { dateText, dateInput } = this.createDateElements(
        task.dueDate,
        task.isComplete
      );

      dateText.addEventListener("click", () =>
        this.toggleDateInput(dateText, dateInput)
      );
      dateInput.addEventListener("blur", () =>
        this.handleDateChange(
          dateText,
          dateInput,
          projectId,
          task,
          updateTaskDueDateCallback
        )
      );
      dateInput.addEventListener("change", () =>
        this.handleDateChange(
          dateText,
          dateInput,
          projectId,
          task,
          updateTaskDueDateCallback
        )
      );

      dateContainer.appendChild(dateText);
      dateContainer.appendChild(dateInput);
    } else {
      const addButton = this.createAddDateButton(
        projectId,
        task,
        updateTaskDueDateCallback
      );
      dateContainer.appendChild(addButton);
    }

    return dateContainer;
  },

  createDateElements(dueDate, isComplete) {
    const dateText = document.createElement("span");
    dateText.innerHTML = formatDate(dueDate);
    dateText.classList.add("date-text");

    if (isComplete) {
      dateText.classList.add("task-is-complete");
    }

    const dateInput = this.createDateInputElement(dueDate, isComplete);
    dateInput.style.display = "none";

    return { dateText, dateInput };
  },

  createDateInputElement(dueDate, isComplete) {
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = dueDate
      ? new Date(dueDate).toISOString().substr(0, 10)
      : "";
    dateInput.classList.add("due-date-input");
    dateInput.disabled = isComplete;
    return dateInput;
  },

  createAddDateButton(projectId, task, updateTaskDueDateCallback) {
    const addButton = document.createElement("button");
    addButton.classList.add("add-date-button");
    addButton.textContent = "Add a due date";

    addButton.addEventListener("click", () => {
      const dateInput = this.createDateInputElement("", task.isComplete);
      dateInput.addEventListener("change", () => {
        if (dateInput.value) {
          updateTaskDueDateCallback(projectId, task.id, dateInput.value);
        }
      });

      const dateText = document.createElement("span");
      dateText.style.display = "none";

      this.toggleDateInput(dateText, dateInput);

      const dateContainer = addButton.parentElement;
      dateContainer.innerHTML = ""; // Clear existing content
      dateContainer.appendChild(dateInput);
      dateInput.focus();
    });

    return addButton;
  },

  toggleDateInput(dateText, dateInput) {
    dateText.style.display = "none";
    dateInput.style.display = "inline";
    dateInput.focus();
  },

  handleDateChange(
    dateText,
    dateInput,
    projectId,
    task,
    updateTaskDueDateCallback
  ) {
    if (dateInput.value !== task.dueDate) {
      updateTaskDueDateCallback(projectId, task.id, dateInput.value);
      dateText.innerHTML = formatDate(dateInput.value);
    }
    dateText.style.display = "inline";
    dateInput.style.display = "none";
  },
};

export default DateElement;
