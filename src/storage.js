import Project from "./projects";
class Storage{
    static find(key,name){
        let myArray =JSON.parse(localStorage.getItem(key));
        if(myArray.find(e=> e.name == name)){
            return true;
        }else{
            return false;
        }
    }
    static addProject(name){
        let myArray =JSON.parse(localStorage.getItem('Projects'));
        myArray.push(name);
        localStorage.setItem("Projects",JSON.stringify(myArray));
    }
    static initializeLocalStorage(){
        if (localStorage.getItem('Projects')){
            return;
        }
        else{
            let newProject = new Project("Inbox");
            let myArray=[];
            myArray.push(newProject);
            localStorage.setItem("Projects",JSON.stringify(myArray));
        }
    }
    static getProjects(){
        return JSON.parse(localStorage.getItem("Projects"));
    }
    static removeProject(name){
        let projects = this.getProjects();
        let index = projects.findIndex(e=>e.name===name);
        if(index >=0){
            projects.splice(index,1); 
            localStorage.setItem("Projects",JSON.stringify(projects));
        }
    }
    static getProject(name){
        let projects = this.getProjects()
        return Object.assign(new Project,projects.find(e=>e.name == name));
    }
    static addTask(projectName,task){
        let project = this.getProject(projectName);
        project.addTask(task);
        this.removeProject(projectName)
        this.addProject(project);
    }
    static removeTask(projectName,task){
        let project = this.getProject(projectName);
        project.removeTask(task);
        this.removeProject(projectName);
        this.addProject(project);
    }
    static updateTask(projectName,task){
        let project = this.getProject(projectName);
        project.removeTask(task);
        project.addTask(task);
        this.removeProject(projectName);
        this.addProject(project);
    }
}
export default Storage;