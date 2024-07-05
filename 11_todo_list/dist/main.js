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

    addTaskToProject(projectId, taskName) {
        const project = this.projectList.findProject(projectId);
        if (project) {
            project.addTask(taskName);
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
    createTaskListElement(tasks) {
        const ul = document.createElement('ul');
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;
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
        
        const taskListElement = this.createTaskListElement(project.tasks);
        div.appendChild(taskListElement);
        
        return div;
    }

    clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
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

        // Add task to project
        document.getElementById('taskForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
        
            const taskName = document.getElementById('taskInput').value.trim();
        
            if (taskName === '') {
                return;
            }
        
            const newTaskElement = this.createTaskElement(taskName);
        
            const taskList = document.getElementById('taskList');
            taskList.appendChild(newTaskElement);
        
            // Clear form field
            document.getElementById('taskInput').value = '';
        });
    }

    renderProjects() {
        const projectListContainer = document.getElementById('projectList');
        console.log(projectListContainer);
        this.clearElement(projectListContainer);
    
        const projects = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects(); 
    
        projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            projectListContainer.appendChild(projectElement);
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
// projectList.js



class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject(projectName) {
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);
        this.projects.push(project);
    }

    findProject(projectId) {
        return this.projects.find(project => project.id === parseInt(projectId));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1I7O0FBRXBCO0FBQ2Y7QUFDQSwrQkFBK0IsdURBQVc7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG1EQUFPO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7O0FBRTZCOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFFbUM7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1EQUFPO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJtQztBQUNOOztBQUVkO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtREFBTztBQUN2QztBQUNBO0FBQ0EsaUNBQWlDLGdEQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTNCLGdCQUFnQiwrQ0FBRztBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvdGFzay5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuL3Byb2plY3RMaXN0LmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3QoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnByb2plY3RzID0gc3RvcmVkUHJvamVjdHM7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdElkLCB0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHJvamVjdHMoKSB7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cztcbiAgICB9XG5cblxuICAgIC8vIERPTSBFbGVtZW50c1xuICAgIGNyZWF0ZVRhc2tMaXN0RWxlbWVudCh0YXNrcykge1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgzPiR7cHJvamVjdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aDQ+VGFza3M6PC9oND5cbiAgICAgICAgYDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0RWxlbWVudCA9IHRoaXMuY3JlYXRlVGFza0xpc3RFbGVtZW50KHByb2plY3QudGFza3MpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0xpc3RFbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIGluaXRFdmVudExpc3RlbmVycygpIHtcblxuICAgICAgICAvLyBBZGQgcHJvamVjdFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCB0YXNrIHRvIHByb2plY3RcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lucHV0JykudmFsdWUudHJpbSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXNrTmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3VGFza0VsZW1lbnQgPSB0aGlzLmNyZWF0ZVRhc2tFbGVtZW50KHRhc2tOYW1lKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpO1xuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobmV3VGFza0VsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENsZWFyIGZvcm0gZmllbGRcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3RDb250YWluZXIpO1xuICAgICAgICB0aGlzLmNsZWFyRWxlbWVudChwcm9qZWN0TGlzdENvbnRhaW5lcik7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpOyBcbiAgICBcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gdGhpcy5jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gcHJvamVjdC5qc1xuXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFza05hbWUpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn1cbiIsIi8vIHByb2plY3RMaXN0LmpzXG5cbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGZpbmRQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gcGFyc2VJbnQocHJvamVjdElkKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBzYXZlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xuICAgICAgICByZXR1cm4gcHJvamVjdHNEYXRhLm1hcChwcm9qZWN0RGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdERhdGEubmFtZSk7XG4gICAgICAgICAgICBwcm9qZWN0LmlkID0gcHJvamVjdERhdGEuaWQ7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdERhdGEudGFza3MubWFwKHRhc2tEYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0RhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgdGFzay5pZCA9IHRhc2tEYXRhLmlkO1xuICAgICAgICAgICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRhc2tEYXRhLmlzQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsIi8vIHRhc2suanNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5yZW5kZXJQcm9qZWN0cygpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==