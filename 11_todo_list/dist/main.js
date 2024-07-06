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
            this.toggleTaskComplete.bind(this)
        );
        this.loadProjects();
        this.initEventListeners();
        this.renderProjects();
    }

    loadProjects = () => {
        this.projectList.projects = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    }

    addProject = (projectName) => {
        this.projectList.addProject(projectName);
        this.saveProjectsAndRender();
    }

    deleteProject = (projectID) => {
        this.projectList.deleteProject(projectID);
        this.saveProjectsAndRender();
    }

    addTaskToProject = (projectId, taskName) => {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.addTask(taskName);
            this.saveProjectsAndRender();
        }
    }

    deleteTaskFromProject = (projectId, taskId) => {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.deleteTask(taskId);
            this.saveProjectsAndRender();
        }
    }

    toggleTaskComplete(projectId, taskId) {
        console.log(this.projectList);
        const project = this.projectList.findProject(projectId);
        console.log(project);
        if (project) {
            const task = project.tasks.find(task => task.id === taskId);
            console.log(`task: ${task.id}`)
            if (task) {
                task.isComplete = !task.isComplete;
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
        localStorage.setItem('projects', JSON.stringify(projects));
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
// task.js

class Task {
        constructor(name) {
            this.id = new Date().getTime();
            this.name = name;
            this.isComplete = false; 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNSO0FBQ1E7OztBQUc1QjtBQUNmO0FBQ0EsK0JBQStCLHVEQUFXO0FBQzFDLCtCQUErQix1REFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsbURBQU87QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtREFBTztBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVzs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBOztBQUU2Qjs7QUFFZDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUM7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtREFBTztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUM7QUFDTjs7QUFFZDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbURBQU87QUFDdkM7QUFDQTtBQUNBLGlDQUFpQyxnREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ04yQjs7QUFFM0IsZ0JBQWdCLCtDQUFHO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4vcHJvamVjdExpc3QuanMnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCBET01FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gbmV3IFByb2plY3RMaXN0KCk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMgPSBuZXcgRE9NRWxlbWVudHMoXG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tUb1Byb2plY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5kZWxldGVUYXNrRnJvbVByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlVGFza0NvbXBsZXRlLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cyA9IFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SUQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3RJRCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYWRkVGFza1RvUHJvamVjdCA9IChwcm9qZWN0SWQsIHRhc2tOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGFza05hbWUpO1xuICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdHNBbmRSZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2tGcm9tUHJvamVjdCA9IChwcm9qZWN0SWQsIHRhc2tJZCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVQcm9qZWN0c0FuZFJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVGFza0NvbXBsZXRlKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdExpc3QpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHRhc2s6ICR7dGFzay5pZH1gKVxuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSAhdGFzay5pc0NvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVByb2plY3RzQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHJvamVjdHNBbmRSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBzYXZlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgIH1cblxuICAgIHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLmNsZWFyRWxlbWVudChwcm9qZWN0TGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnRzLmNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NRWxlbWVudHMge1xuICAgICAgICBjb25zdHJ1Y3RvcihhZGRUYXNrQ2FsbGJhY2ssIFxuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RDYWxsYmFjaywgXG4gICAgICAgICAgICAgICAgZGVsZXRlVGFza0NhbGxiYWNrLFxuICAgICAgICAgICAgICAgIHRvZ2dsZVRhc2tDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFza0NhbGxiYWNrID0gYWRkVGFza0NhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdENhbGxiYWNrID0gZGVsZXRlUHJvamVjdENhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFza0NhbGxiYWNrID0gZGVsZXRlVGFza0NhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVGFza0NhbGxiYWNrID0gdG9nZ2xlVGFza0NhbGxiYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZVRhc2tMaXN0RWxlbWVudChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gdGhpcy5jcmVhdGVUYXNrTGlzdEl0ZW0ocHJvamVjdC5pZCwgdGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlVGFza0xpc3RJdGVtKHByb2plY3RJZCwgdGFzaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IHRoaXMuY3JlYXRlVGFza0NoZWNrYm94KHByb2plY3RJZCwgdGFzayk7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKHRhc2tDaGVja2JveClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFzay5uYW1lKTtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gdGhpcy5jcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFzay5pZCk7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbGk7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVUYXNrQ2hlY2tib3gocHJvamVjdElkLCB0YXNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVUYXNrQ2FsbGJhY2socHJvamVjdElkLCB0YXNrLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVEZWxldGVUYXNrQnV0dG9uKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2tDYWxsYmFjayhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZVRhc2tCdXR0b247XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tGb3JtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciB0YXNrIG5hbWUnO1xuICAgICAgICAgICAgICAgIGlucHV0LmlkID0gYHRhc2tJbnB1dF8ke3Byb2plY3QuaWR9YDtcblxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRhc2tDYWxsYmFjayhwcm9qZWN0LmlkLCB0YXNrTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGgzPiR7cHJvamVjdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoND5UYXNrczo8L2g0PlxuICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRhc2tMaXN0RWxlbWVudChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0xpc3RFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gdGhpcy5jcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0Q2FsbGJhY2socHJvamVjdC5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG4iLCIvLyBwcm9qZWN0LmpzXG5cbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUpO1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBmaW5kUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHBhcnNlSW50KHByb2plY3RJZCkpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IHBhcnNlSW50KHByb2plY3RJZCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzRGF0YS5tYXAocHJvamVjdERhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3REYXRhLmlkO1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3REYXRhLnRhc2tzLm1hcCh0YXNrRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tEYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRhc2suaWQgPSB0YXNrRGF0YS5pZDtcbiAgICAgICAgICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0YXNrRGF0YS5pc0NvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCIvLyB0YXNrLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgfVxuICAgICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5yZW5kZXJQcm9qZWN0cygpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==