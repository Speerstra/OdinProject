export default class ProjectList
{
        constructor()
        {
                this.ProjectList = {};
        }
    
        add(newProject)
        {
                this.ProjectList[newProject.id] = newProject;
        }

        get ProjectList()
        {
                return Object.values(this.ProjectList);
        }

        get(id)
        {
                return this.ProjectList[id];
        }

        remove(id)
        {
                delete this.ProjectList[id];
        }
}