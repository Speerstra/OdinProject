
export default class TaskList {
        
        constructor()
        {
                this.taskList = {};
        }
    
        // get taskList()
        // {
        //         return Object.values(this.taskList);
        // }

        add(task)
        {
                return this.taskList[task.id] = task;
        }

        get(taskId)
        {
                return this.taskList[taskId];
        }

        delete(taskId)
        {
                delete this.taskList[taskId];
        }
}