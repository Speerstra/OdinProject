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
            this.renderProjects()
        })
        
        div.appendChild(addTaskForm)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1I7O0FBRXBCO0FBQ2Y7QUFDQSwrQkFBK0IsdURBQVc7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtREFBTztBQUNmOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7O0FBSVQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTs7QUFFNkI7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQzs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1EQUFPO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJtQztBQUNOOztBQUVkO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtREFBTztBQUN2QztBQUNBO0FBQ0EsaUNBQWlDLGdEQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTNCLGdCQUFnQiwrQ0FBRztBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLzEwX3RvZG9fbGlzdC8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0Ly4vc3JjL3NjcmlwdHMvdGFzay5qcyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTBfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8xMF90b2RvX2xpc3QvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuL3Byb2plY3RMaXN0LmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3QoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LnByb2plY3RzID0gc3RvcmVkUHJvamVjdHM7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElEKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgcHJvamVjdCEnKVxuICAgICAgICB0aGlzLnByb2plY3RMaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdElEKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdElkLCB0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdC5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHJvamVjdHMoKSB7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RzKHRoaXMucHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdC5wcm9qZWN0cztcbiAgICB9XG5cblxuXG4gICAgLy8gRE9NIEVsZW1lbnRzXG4gICAgY3JlYXRlVGFza0xpc3RFbGVtZW50KHRhc2tzKSB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMz4ke3Byb2plY3QubmFtZX08L2gzPlxuICAgICAgICAgICAgPGg0PlRhc2tzOjwvaDQ+XG4gICAgICAgIGA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRhc2tMaXN0RWxlbWVudChwcm9qZWN0LnRhc2tzKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGFkZFRhc2tGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrIG5hbWVcIiBpZD1cInRhc2tJbnB1dFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgICAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xuICAgICAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKS52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodGFza05hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0LmlkLCB0YXNrTmFtZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKVxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnWCc7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0LmlkKVxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgICB9KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbilcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuXG5cbiAgICBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcblxuICAgICAgICB0aGlzLmNsZWFyRWxlbWVudChwcm9qZWN0TGlzdENvbnRhaW5lcik7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpOyBcbiAgICBcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gdGhpcy5jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgLy8gQWRkIHByb2plY3RcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG5cbiAgICB9XG59XG4iLCIvLyBwcm9qZWN0LmpzXG5cbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUpO1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgZmluZFByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwYXJzZUludChwcm9qZWN0SWQpKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBwYXJzZUludChwcm9qZWN0SWQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIHNhdmVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XG4gICAgICAgIHJldHVybiBwcm9qZWN0c0RhdGEubWFwKHByb2plY3REYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcbiAgICAgICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0RGF0YS5pZDtcbiAgICAgICAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0RGF0YS50YXNrcy5tYXAodGFza0RhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICB0YXNrLmlkID0gdGFza0RhdGEuaWQ7XG4gICAgICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdGFza0RhdGEuaXNDb21wbGV0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiLy8gdGFzay5qc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnJlbmRlclByb2plY3RzKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9