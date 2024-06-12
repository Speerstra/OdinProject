
export default class TaskList {
        
        constructor()
        {
                this.taskList = {};
        }
    
        // get taskList()
        // {
        //         return Object.values(this.taskList);
        // }

        add(newTask)
        {
                return this.taskList[newTask.id] = newTask;
        }

        get(id)
        {
                return this.taskList[id];
        }

        delete(id)
        {
                delete this.taskList[id];
        }
}