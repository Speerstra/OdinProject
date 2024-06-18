import Project from './project';
import ProjectList from './projectList';
import Task from './task';
import TaskList from './taskList';

export default class MainModel {
        constructor() {
                this.taskList = new TaskList();
                this.projectList = new ProjectList();  
        }


        // LOCAL STORAGE ------
        setLocalStorage(key, value) {
                localStorage.setItem(key, JSON.stringify(value));
        }

        getLocalStorage(key) {
                return JSON.parse(localStorage.getItem(key));    
        }

        // TASKS -----
        createTask(name, project, dueDate, isImportant) {
                return new Task(name, project, dueDate, isImportant);
        }
        
        addTaskToList(task) {
                let taskList = JSON.parse(localStorage.getItem('taskList')) || {};
                console.log('hiiii', typeof(this.taskList));
                this.taskList.add(task);
                this.setLocalStorage('taskList', this.taskList);
                return this.taskList;
        }

        deleteTask(taskId) {
                this.taskList.delete(taskId);
                this.setLocalStorage('taskList', this.taskList);
                return this.taskList;
        }

        updateTask(id, updatedTask) {
                this.taskList = this.taskList.map(task => task.id === id ? updatedTask : task);
                this.setLocalStorage('taskList', this.taskList);
        }




        // PROJECTS -----
        createProject(name) {
                const newProject = new Project(name);
                this.projectList.add(newProject);
                
                return newProject;
        }

        addProjectToList(project) {
                this.projectList.add(project)
                return this.projectList;
        }

        deleteProject(id) {
                this.projectList.delete(id);
                this.setLocalStorage('projectList', this.projectList);
        }

        editProject(id, updatedProject) {
                this.projectList.edit(id, updatedProject);
                this.setLocalStorage('projectList', this.projectList);
        }


};