
export default class TaskList {
        
        constructor()
        {
                this.taskList = {};
        }

        add(task) {
                this.taskList[task.id] = task;
        }

        delete(taskId) {
                this.taskList = this.taskList.filter(task => task.id !== taskId);
        }

        get(taskId) {
                return this.taskList.find(task => task.id === taskId);
        }

}