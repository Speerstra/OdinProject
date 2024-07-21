function formatDate(date) {
  if (!date) return "No due date";

  const options = { month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

function isOverdue(date) {
  if (!date) return false;

  const dueDate = new Date(date);
  const today = new Date();

  return dueDate < today;
}

export function createDueDateElement(
  projectId,
  task,
  updateTaskDueDateCallback
) {
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");

  if (task.dueDate) {
    const { dateText, dateInput } = createDateElements(
      task.dueDate,
      task.isComplete
    );

    dateText.addEventListener("click", () =>
      toggleDateInput(dateText, dateInput)
    );
    dateInput.addEventListener("blur", () =>
      handleDateChange(
        dateText,
        dateInput,
        projectId,
        task,
        updateTaskDueDateCallback
      )
    );
    dateInput.addEventListener("change", () =>
      handleDateChange(
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
    const dateInput = createDateInputElement(task.dueDate, task.isComplete);
    dateInput.addEventListener("change", () =>
      updateTaskDueDateCallback(projectId, task.id, dateInput.value)
    );
    dateContainer.appendChild(dateInput);
  }

  return dateContainer;
}

function createDateElements(dueDate, isComplete) {
  const dateText = document.createElement("span");
  dateText.innerHTML = formatDate(dueDate);
  dateText.classList.add("date-text");

  if (isComplete) {
    dateText.classList.add("task-is-complete");
  }

  if (isOverdue(dueDate)) {
    dateText.classList.add("due-date-overdue");
  }

  const dateInput = createDateInputElement(dueDate, isComplete);
  dateInput.style.display = "none";

  return { dateText, dateInput };
}

function createDateInputElement(dueDate, isComplete) {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = dueDate
    ? new Date(dueDate).toISOString().substr(0, 10)
    : "";
  dateInput.classList.add("due-date-input");
  dateInput.disabled = isComplete;
  return dateInput;
}

function toggleDateInput(dateText, dateInput) {
  dateText.style.display = "none";
  dateInput.style.display = "inline";
  dateInput.focus();
}

function handleDateChange(
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
}
