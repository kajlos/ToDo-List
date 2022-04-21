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
    static addItem(key,name){
        let myArray =JSON.parse(localStorage.getItem(key));
        myArray.push(name);
        localStorage.setItem(key,JSON.stringify(myArray));
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
        let projects = JSON.parse(localStorage.getItem("Projects"));
        let index = projects.findIndex(e=>e.name===name);
        if(index >=0){
            projects.splice(index,1); 
            localStorage.setItem("Projects",JSON.stringify(projects));
        }
    }
}
export default Storage;