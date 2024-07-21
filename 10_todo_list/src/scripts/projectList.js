import Project from "./project.js";

export default class ProjectList {
  constructor() {
    this.projects = [];
  }

  findProject(projectId) {
    const project = this.projects.find(
      (project) => project.id === parseInt(projectId)
    );
    if (!project) {
      throw new Error(`Project with id ${projectId} not found.`);
    }

    return project;
  }

  findTask(projectId, taskId) {
    const project = this.findProject(projectId);
    const task = project.tasks.find((task) => task.id === taskId);

    if (!task) {
      throw new Error(`Task with id ${taskId} not found.`);
    }

    return task;
  }

  addProject(projectName) {
    const project = new Project(projectName);
    this.projects.push(project);
  }

  deleteProject(projectId) {
    this.projects = this.projects.filter(
      (project) => project.id !== parseInt(projectId)
    );
  }

  updateProjectName(projectId, newProjectName) {
    const project = this.findProject(projectId);
    project.updateProjectName(newProjectName);
  }

  sortProjects() {
    this.projects.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortTasks(project) {
    project.tasks.sort((a, b) => {
      const dueDateA = a.dueDate ? new Date(a.dueDate) : Infinity;
      const dueDateB = b.dueDate ? new Date(b.dueDate) : Infinity;
      return dueDateA - dueDateB;
    });
  }

  sortProjectsAndTasks() {
    this.sortProjects();
    this.projects.forEach((project) => this.sortTasks(project));
  }
}
