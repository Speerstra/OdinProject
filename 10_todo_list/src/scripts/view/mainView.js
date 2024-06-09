import TodoItemView from "./todoItemView";
import ProjectView from "./projectView";

export default class MainView {
        constructor()
        {
                this.todoList = new TodoList();
                this.projectList = new ProjectList();
        }
};