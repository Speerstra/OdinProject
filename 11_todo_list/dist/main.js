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



class App {
    constructor() {
        this.projectList = new _projectList_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.loadProjects();
        this.initEventListeners();
    }

    loadProjects() {
        const storedProjects = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
        this.projectList.projects = storedProjects;
    }

    addProject(projectName) {
        this.projectList.addProject(projectName);
        this.saveProjects();
    }

    deleteProject(projectID) {
        console.log('delete project!')
        this.projectList.deleteProject(projectID);
        this.saveProjects();
        this.renderProjects();
    }

    addTaskToProject(projectId, taskName) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.addTask(taskName);
            this.saveProjects();
        }
    }

    deleteTaskFromProject(projectId, taskId) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.deleteTask(taskId);
            this.saveProjects();
        }
    }

    saveProjects() {
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(this.projectList.projects);
    }

    getProjects() {
        return this.projectList.projects;
    }



    // DOM Elements
    createTaskListElement(project) {
        const ul = document.createElement('ul');
        const tasks = project.tasks
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;

            const deleteTaskButton = document.createElement('button');
            deleteTaskButton.textContent = 'delete Task';
            deleteTaskButton.addEventListener('click', () => {
                this.deleteTaskFromProject(project.id, task.id); 
                this.renderProjects(); 
            });

            li.appendChild(deleteTaskButton)

            
            ul.appendChild(li);
        });
        return ul;
    }


    createProjectElement(project) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${project.name}</h3>
            <h4>Tasks:</h4>
        `;
        
        const taskListElement = this.createTaskListElement(project);
        div.appendChild(taskListElement);
    
        div.appendChild(this.createAddTaskForm(project));
    
        const deleteProjectButton = document.createElement('button')
        deleteProjectButton.innerHTML = 'X';
        deleteProjectButton.classList.add('delete-project-button');
        deleteProjectButton.setAttribute('data-project-id', project.id)
        deleteProjectButton.addEventListener('click', () => {
            this.deleteProject(project.id);
        })
        div.appendChild(deleteProjectButton)
    
        return div;
    }

    createAddTaskForm(project) {
        const addTaskForm = document.createElement('form');
        addTaskForm.innerHTML = `
            <input type="text" placeholder="Enter task name" id="taskInput">
            <button type="submit">Add Task</button>
        `;
        addTaskForm.classList.add('taskForm');
        
        addTaskForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const taskName = document.getElementById('taskInput').value.trim();
            if (taskName === '') {
                return;
            }
        
            this.addTaskToProject(project.id, taskName);
            document.getElementById('taskInput').value = '';
            this.renderProjects();
        });
    
        return addTaskForm;
    }



    clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    renderProjects() {
        const projectListContainer = document.getElementById('projectList');

        this.clearElement(projectListContainer);
    
        const projects = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects(); 
    
        projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            projectListContainer.appendChild(projectElement);
        });
    }


    // Event Listeners
    initEventListeners() {

        // Add project
        document.getElementById('addProjectButton').addEventListener('click', () => {
            const projectName = document.getElementById('projectNameInput').value;
            if (projectName) {
                this.addProject(projectName);
                this.renderProjects();
            }
        });
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
            this.isComplete = false; // Default value is false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1I7O0FBRXBCO0FBQ2Y7QUFDQSwrQkFBK0IsdURBQVc7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtREFBTztBQUNmOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGFBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlKQTs7QUFFNkI7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1DOztBQUVwQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbURBQU87QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1DO0FBQ047O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1EQUFPO0FBQ3ZDO0FBQ0E7QUFDQSxpQ0FBaUMsZ0RBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOzs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ04yQjs7QUFFM0IsZ0JBQWdCLCtDQUFHO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4vcHJvamVjdExpc3QuanMnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuICAgICAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHJvamVjdHMgPSBzdG9yZWRQcm9qZWN0cztcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SUQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBwcm9qZWN0IScpXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0SUQpO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0SWQsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RMaXN0LmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGFza05hbWUpO1xuICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0SWQsIHRhc2tJZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVByb2plY3RzKCkge1xuICAgICAgICBTdG9yYWdlLnNhdmVQcm9qZWN0cyh0aGlzLnByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3QucHJvamVjdHM7XG4gICAgfVxuXG5cblxuICAgIC8vIERPTSBFbGVtZW50c1xuICAgIGNyZWF0ZVRhc2tMaXN0RWxlbWVudChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdkZWxldGUgVGFzayc7XG4gICAgICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHByb2plY3QuaWQsIHRhc2suaWQpOyBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7IFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMz4ke3Byb2plY3QubmFtZX08L2gzPlxuICAgICAgICAgICAgPGg0PlRhc2tzOjwvaDQ+XG4gICAgICAgIGA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRhc2tMaXN0RWxlbWVudChwcm9qZWN0KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RWxlbWVudCk7XG4gICAgXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFkZFRhc2tGb3JtKHByb2plY3QpKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gJ1gnO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgcHJvamVjdC5pZClcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgICAgfSlcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pXG4gICAgXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgYWRkVGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrIG5hbWVcIiBpZD1cInRhc2tJbnB1dFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0Zvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0YXNrTmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QuaWQsIHRhc2tOYW1lKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGFkZFRhc2tGb3JtO1xuICAgIH1cblxuXG5cbiAgICBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcblxuICAgICAgICB0aGlzLmNsZWFyRWxlbWVudChwcm9qZWN0TGlzdENvbnRhaW5lcik7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpOyBcbiAgICBcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gdGhpcy5jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgLy8gQWRkIHByb2plY3RcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBwcm9qZWN0LmpzXG5cbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUpO1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBmaW5kUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHBhcnNlSW50KHByb2plY3RJZCkpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IHBhcnNlSW50KHByb2plY3RJZCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzRGF0YS5tYXAocHJvamVjdERhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3REYXRhLmlkO1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3REYXRhLnRhc2tzLm1hcCh0YXNrRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tEYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRhc2suaWQgPSB0YXNrRGF0YS5pZDtcbiAgICAgICAgICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0YXNrRGF0YS5pc0NvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCIvLyB0YXNrLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyUHJvamVjdHMoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=