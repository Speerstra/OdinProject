
export default class TaskList {
        
        constructor()
        {
                this.taskList = {};
        }
    
        add(newTask)
        {
                this.taskList[newItem.id] = newTask;
        }

        get taskList()
        {
                return Object.values(this.taskList);
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