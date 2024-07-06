/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList.js */ "./src/scripts/projectList.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/scripts/storage.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements.js */ "./src/scripts/domElements.js");





class App {
    constructor() {
        this.projectList = new _projectList_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.domElements = new _domElements_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            this.addTaskToProject.bind(this),
            this.deleteProject.bind(this),
            this.deleteTaskFromProject.bind(this),
            this.toggleTaskComplete.bind(this),
            this.updateTaskName.bind(this),
            this.updateTaskDueDate.bind(this)
        );
        this.loadProjects();
        this.initEventListeners();
        this.renderProjects();
    }

    loadProjects() {
        this.projectList.projects = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    }

    addProject (projectName) {
        this.projectList.addProject(projectName);
        this.saveProjectsAndRender();
    }

    deleteProject(projectID) {
        this.projectList.deleteProject(projectID);
        this.saveProjectsAndRender();
    }

    addTaskToProject(projectId, taskName) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.addTask(taskName);
            this.saveProjectsAndRender();
        }
    }

    deleteTaskFromProject(projectId, taskId) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.deleteTask(taskId);
            this.saveProjectsAndRender();
        }
    }

    toggleTaskComplete(projectId, taskId) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            const task = project.tasks.find(task => task.id === taskId);
            if (task) {
                task.toggleComplete();
                this.saveProjectsAndRender();
            }
        }
    }

    updateTaskName(projectId, taskId, newName) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            const task = project.tasks.find(task => task.id === taskId);
            if (task) {
                task.updateName(newName);
                this.saveProjectsAndRender();
            }
        }
    }

    updateTaskDueDate(projectId, taskId, newDueDate) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            const task = project.tasks.find(task => task.id === taskId);
            if (task) {
                task.updateDueDate(newDueDate);
                this.saveProjectsAndRender();
            }
        }
    }

    saveProjectsAndRender = () => {
        this.saveProjects();
        this.renderProjects();
    }

    saveProjects = () => {
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(this.projectList.projects);
    }

    renderProjects = () => {
        const projectListContainer = document.getElementById('projectList');
        this.domElements.clearElement(projectListContainer);

        this.projectList.projects.forEach(project => {
            const projectElement = this.domElements.createProjectElement(project);
            projectListContainer.appendChild(projectElement);
        });
    }

    initEventListeners = () => {
        document.getElementById('addProjectButton').addEventListener('click', () => {
            const projectNameInput = document.getElementById('projectNameInput');
            const projectName = projectNameInput.value.trim();
            if (projectName) {
                this.addProject(projectName);
                projectNameInput.value = '';
            }
        });
    }
}


/***/ }),

/***/ "./src/scripts/domElements.js":
/*!************************************!*\
  !*** ./src/scripts/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMElements)
/* harmony export */ });
class DOMElements {
        constructor(addTaskCallback, 
                deleteProjectCallback, 
                deleteTaskCallback,
                toggleTaskCallback,
                updateTaskNameCallback,
                updateTaskDueDateCallback) {
                this.addTaskCallback = addTaskCallback;
                this.deleteProjectCallback = deleteProjectCallback;
                this.deleteTaskCallback = deleteTaskCallback;
                this.toggleTaskCallback = toggleTaskCallback;
                this.updateTaskNameCallback = updateTaskNameCallback;
                this.updateTaskDueDateCallback = updateTaskDueDateCallback;
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

                if (task.isComplete) {
                        li.classList.add('isComplete');
                }

                const taskNameInput = this.createTaskNameInput(projectId, task);
                li.appendChild(taskNameInput);

                const dueDateInput = this.createDueDateInput(projectId, task);
                li.appendChild(dueDateInput);

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

        createTaskNameInput(projectId, task) {
                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.value = task.name;
                nameInput.classList.add('task-name-input');
                nameInput.disabled = task.isComplete;
        
                nameInput.addEventListener('blur', () => {
                    const newName = nameInput.value.trim();
                    if (newName && newName !== task.name) {
                        this.updateTaskNameCallback(projectId, task.id, newName);
                    }
                });
        
                return nameInput;
        }

        createDueDateInput(projectId, task) {
                const dateInput = document.createElement('input');
                dateInput.type = 'date';
                dateInput.value = task.dueDate || ''; 
                dateInput.classList.add('due-date-input');
                dateInput.disabled = task.isComplete; 
        
                dateInput.addEventListener('change', () => {
                    const dueDate = dateInput.value;
                    this.updateTaskDueDateCallback(projectId, task.id, dueDate);
                });
        
                return dateInput;
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


/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");
// project.js



class Project {
    constructor(name) {
        this.id = new Date().getTime();
        this.name = name;
        this.tasks = [];
    }

    addTask(taskName) {
        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskName);
        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}


/***/ }),

/***/ "./src/scripts/projectList.js":
/*!************************************!*\
  !*** ./src/scripts/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");


class ProjectList {
    constructor() {
        this.projects = [];
    }

    findProject(projectId) {
        return this.projects.find(project => project.id === parseInt(projectId));
    }

    addProject(projectName) {
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);
        this.projects.push(project);
    }

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== parseInt(projectId));
    }
}


/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");



class Storage {
    static saveProjects(projects) {
        const projectsData = projects.map(project => ({
            id: project.id,
            name: project.name,
            tasks: project.tasks.map(task => ({
                id: task.id,
                name: task.name,
                completed: task.completed,
                dueDate: task.dueDate,
            })),
        }));

        localStorage.setItem('projects', JSON.stringify(projectsData));
    }

    static getProjects() {
        const projectsData = JSON.parse(localStorage.getItem('projects')) || [];
        return projectsData.map(projectData => {
            const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectData.name);
            project.id = projectData.id;
            project.tasks = projectData.tasks.map(taskData => {
                const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskData.name);
                task.id = taskData.id;
                task.isComplete = taskData.isComplete;
                return task;
            });
            return project;
        });
    }
}



/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name) {
        this.id = new Date().getTime();
        this.name = name;
        this.dueDate = '';
        this.isComplete = false;
    }

    updateName(newName) {
        this.name = newName;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    toggleComplete() {
        this.isComplete = !this.isComplete;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/scripts/app.js");


const app = new _app_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.renderProjects();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxnREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTjJCOztBQUUzQixnQkFBZ0IsK0NBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi9wcm9qZWN0TGlzdC5qcyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IERPTUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3QoKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cyA9IG5ldyBET01FbGVtZW50cyhcbiAgICAgICAgICAgIHRoaXMuYWRkVGFza1RvUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2tGcm9tUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy50b2dnbGVUYXNrQ29tcGxldGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza05hbWUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0R1ZURhdGUuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgbG9hZFByb2plY3RzKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SUQpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3RJRCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0SWQsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGFza05hbWUpO1xuICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVGFza0NvbXBsZXRlKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrTmFtZShwcm9qZWN0SWQsIHRhc2tJZCwgbmV3TmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIHRhc2sudXBkYXRlTmFtZShuZXdOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVGFza0R1ZURhdGUocHJvamVjdElkLCB0YXNrSWQsIG5ld0R1ZURhdGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdExpc3QuZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICB0YXNrLnVwZGF0ZUR1ZURhdGUobmV3RHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVQcm9qZWN0c0FuZFJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIHNhdmVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgU3RvcmFnZS5zYXZlUHJvamVjdHModGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0Jyk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMuY2xlYXJFbGVtZW50KHByb2plY3RMaXN0Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudHMuY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01FbGVtZW50cyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGFkZFRhc2tDYWxsYmFjaywgXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdENhbGxiYWNrLCBcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrQ2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgdG9nZ2xlVGFza0NhbGxiYWNrLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFza0NhbGxiYWNrID0gYWRkVGFza0NhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrID0gZGVsZXRlUHJvamVjdENhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFza0NhbGxiYWNrID0gZGVsZXRlVGFza0NhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVGFza0NhbGxiYWNrID0gdG9nZ2xlVGFza0NhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza05hbWVDYWxsYmFjayA9IHVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrRHVlRGF0ZUNhbGxiYWNrID0gdXBkYXRlVGFza0R1ZURhdGVDYWxsYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZVRhc2tMaXN0RWxlbWVudChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gdGhpcy5jcmVhdGVUYXNrTGlzdEl0ZW0ocHJvamVjdC5pZCwgdGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3RJZCwgdGFzaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IHRoaXMuY3JlYXRlVGFza0NoZWNrYm94KHByb2plY3RJZCwgdGFzayk7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKHRhc2tDaGVja2JveClcblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2lzQ29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gdGhpcy5jcmVhdGVUYXNrTmFtZUlucHV0KHByb2plY3RJZCwgdGFzayk7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSB0aGlzLmNyZWF0ZUR1ZURhdGVJbnB1dChwcm9qZWN0SWQsIHRhc2spO1xuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gdGhpcy5jcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFzay5pZCk7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbGk7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVUYXNrQ2hlY2tib3gocHJvamVjdElkLCB0YXNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVUYXNrQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2tDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZVRhc2tCdXR0b247XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVUYXNrTmFtZUlucHV0KHByb2plY3RJZCwgdGFzaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gdGFzay5uYW1lO1xuICAgICAgICAgICAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQuZGlzYWJsZWQgPSB0YXNrLmlzQ29tcGxldGU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld05hbWUgJiYgbmV3TmFtZSAhPT0gdGFzay5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tOYW1lQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkLCBuZXdOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZUlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlRHVlRGF0ZUlucHV0KHByb2plY3RJZCwgdGFzaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlIHx8ICcnOyBcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuZGlzYWJsZWQgPSB0YXNrLmlzQ29tcGxldGU7IFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tEdWVEYXRlQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkLCBkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVJbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgdGFzayBuYW1lJztcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IGB0YXNrSW5wdXRfJHtwcm9qZWN0LmlkfWA7XG5cbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFza05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrQ2FsbGJhY2socHJvamVjdC5pZCwgdGFza05hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdC5pZCk7XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxoMz4ke3Byb2plY3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+VGFza3M6PC9oND5cbiAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gdGhpcy5jcmVhdGVUYXNrTGlzdEVsZW1lbnQocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrRm9ybSA9IHRoaXMuY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG59XG4iLCIvLyBwcm9qZWN0LmpzXG5cbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUpO1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBmaW5kUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHBhcnNlSW50KHByb2plY3RJZCkpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IHBhcnNlSW50KHByb2plY3RJZCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+ICh7XG4gICAgICAgICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgIHRhc2tzOiBwcm9qZWN0LnRhc2tzLm1hcCh0YXNrID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IHRhc2suaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogdGFzay5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogdGFzay5jb21wbGV0ZWQsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzRGF0YS5tYXAocHJvamVjdERhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3REYXRhLmlkO1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3REYXRhLnRhc2tzLm1hcCh0YXNrRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tEYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRhc2suaWQgPSB0YXNrRGF0YS5pZDtcbiAgICAgICAgICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0YXNrRGF0YS5pc0NvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gJyc7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZU5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIHVwZGF0ZUR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5yZW5kZXJQcm9qZWN0cygpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==