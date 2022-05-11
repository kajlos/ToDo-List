
export default class Project{
    constructor(name){
        this.name=name;
        this.tasks = [];
    }
    getTasks(){
        return this.tasks;
    }
    addTask(task){
        this.tasks.push(task);
    }
    removeTask(task){
        let index = this.tasks.map(object=>object.name).indexOf(task);
        this.tasks.splice(index,1);
    }
}
