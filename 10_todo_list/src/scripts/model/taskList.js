
export default class TaskList {
        
        constructor()
        {
                // this.taskList = {};
                let taskList = localStorage.getItem('taskList');
                taskList = taskList ? JSON.parse(taskList) : {};
        }

        add(task) {
                this.taskList = this.taskList || {};
                this.taskList[task.id] = task;
                this.save();
        }

        delete(taskId) {
                this.taskList = this.taskList || {};
                delete this.taskList[taskId];
                this.save();
        }

        get(taskId) {
                return this.taskList.find(task => task.id === taskId);
        }

        save() {
                localStorage.setItem('taskList', JSON.stringify(this.taskList));
            }
}