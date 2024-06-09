import Task from './task';
import Project from './project';
import TaskList from './taskList';
import ProjectList from './projectList';

export default class MainModel {
        constructor() {
                this.todoList = new TaskList();
                this.projectList = new ProjectList();
        }

        // TASKS
        createAndAddTask() {

        }

        deleteTask() {

        }

        editTask() {

        }

        toggleIsComplete() {

        }

        toggleIsImportant() {
                
        }

        updateTaskListStorage() {

        }

        // PROJECTS
        createProject() {

        }

        editProject() {

        }

        deleteProject() {

        }

        updateProjectStorage() {

        }
};