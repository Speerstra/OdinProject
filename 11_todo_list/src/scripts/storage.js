import Project from "./project.js";
import Task from "./task.js";
import initialProjectList from "./initialProjectList.js";

export default class Storage {
  static initialize() {
    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", initialProjectList);
    }
  }

  static saveProjects(projects) {
    const projectsData = projects.map((project) => ({
      id: project.id,
      name: project.name,
      tasks: project.tasks.map((task) => ({
        id: task.id,
        name: task.name,
        isComplete: task.isComplete,
        dueDate: task.dueDate,
      })),
    }));

    localStorage.setItem("projects", JSON.stringify(projectsData));
  }

  static getProjects() {
    const projectsData = JSON.parse(localStorage.getItem("projects")) || [];

    return projectsData.map((projectData) => {
      const project = new Project(projectData.name);
      project.id = projectData.id;
      project.tasks = projectData.tasks.map((taskData) => {
        const task = new Task(taskData.name);
        task.id = taskData.id;
        task.isComplete = taskData.isComplete;
        task.dueDate = taskData.dueDate;
        return task;
      });
      return project;
    });
  }
}
