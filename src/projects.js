import Task from "./tasks";

export default class Project{
    constructor(name){
        this.name=name;
        this.tasks = [];
    }
    getTasks(){
        let arr = [];
        this.tasks.forEach(task=>{
            let obj = Object.assign(new Task,task);
            arr.push(obj);
        });
        return arr;
    }
    addTask(task){
        this.tasks.push(task);
    }
    removeTask(task){
        let index = this.tasks.map(object=>object.name).indexOf(task);
        this.tasks.splice(index,1);
    }
}
