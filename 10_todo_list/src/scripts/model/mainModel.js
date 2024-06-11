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
        createTask(name, description, project, dueDate, isImportant, isComplete) {
                const newTask = new Task(name, description, project, 
                        dueDate, isImportant, isComplete);
                this.taskList.add(newTask)

                return newTask;
        }

        deleteTask(id) {
                this.taskList.delete(id);
        }

        editTask() {

        }

        saveTaskList() {
                window.localStorage.setItem('taskList', JSON.stringify(this.taskList));
        }


        // PROJECTS -----

        createProject(name) {
                const newProject = new Project(name);
                this.projectList.add(newProject);

                return newProject;
        }

        deleteProject(id) {
                this.projectList.delete(id);
        }

        editProject() {

        }

        saveProjectList() {
                window.localStorage.setItem('projectList', JSON.stringify(this.projectList));
        }
};