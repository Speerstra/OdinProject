import Project from './project';
import ProjectList from './projectList';
import Task from './task';
import TaskList from './taskList';

export default class MainModel {
        constructor() {
                this.taskList = new TaskList();
                this.projectList = new ProjectList();
        }

        // TASKS -----
        createTask(name, project, dueDate, isImportant) {
                return new Task(name, project, dueDate, isImportant);
        }

        addTaskToList(task) {
                const newTask = this.taskList.add(task)
                this.taskList.add(newTask);
                return this.taskList;
        }

        deleteTask(id) {
                this.taskList.delete(id);
        }

        updateTask() {

        }

        saveTaskListToLocalStorage() {
                window.localStorage.setItem('taskList', JSON.stringify(this.taskList));
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
        }

        editProject() {

        }

        saveProjectListToLocalStorage() {
                window.localStorage.setItem('projectList', JSON.stringify(this.projectList));
        }

        getListFromLocalStorage(list) {
                return JSON.parse(window.localStorage.getItem(list));
        }
};