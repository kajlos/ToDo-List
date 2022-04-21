import Project from "./projects";
import Storage from "./storage";
const UI = (() => {
    const projectsList = document.getElementById('projects');
    const right= document.querySelector('.right');
    const addTaskButton = document.getElementById('addTask');     
    let errorMessage="This project already exists";
    const createAddProjectButton = ()=>{
      const text="Add project"
      const li = document.createElement('li');
      li.id ='projectButton';
      const img = document.createElement('img');
      img.src="../dist/icons/plus.svg";
      img.classList.add('plus');
      img.alt='';  
      const button = document.createElement('button');
      button.id = 'addProjectButton';
      button.classList.add('project');
      button.append(img,text);
      li.append(button);
      projectsList.append(li);
      button.addEventListener('click',addProject);
    }
    const removeAddProjectButton = ()=>{
      const button = document.getElementById('projectButton');
      projectsList.removeChild(button);
    }
    const removeForm = (e)=>{
      if(projectsList.firstChild){
        projectsList.removeChild(e);
      }
    }
    const removeProjects = ()=>{
      while(projectsList.firstChild){
        projectsList.removeChild(projectsList.lastChild);
      }
    }
    const displayProjects =()=>{
      removeProjects();
      let projects = Storage.getProjects();
      if(!projects==''){
         projects.forEach(project => {
        let name = project.name;
        const removeButton = document.createElement('button');
        const img = document.createElement('img');
        img.src= "../dist/icons/plus.svg";
        img.classList.add('rotate');
        removeButton.append(img);
        removeButton.addEventListener('click',(e)=>{
          let name = (e.target.parentNode.parentNode.textContent);
          Storage.removeProject(name);
          displayProjects();
          createAddProjectButton();
        })
        const div = document.createElement('div');
        div.append(name,removeButton);
        div.classList.add('project','projects');
        let li = document.createElement("li");
        li.append(div);
        projectsList.append(li);
      });
      }
     
    }
    const removeErrorMessage=()=>{
      let childnodes =Array.from(projectsList.children);
      if(childnodes.some(e=>e.classList.contains('error'))){
        let found = childnodes.find(e=>e.textContent==errorMessage);
        projectsList.removeChild(found);
      }
    }
    const addProject =()=>{
      removeAddProjectButton();
      const li = document.createElement('li');
      const form = document.createElement('form');
      const input = document.createElement('input');
      const buttons = document.createElement('div');
      const div= document.createElement('div');
      input.id='projectName';
      input.type='text';
      input.placeholder='Name';
      input.required= true;
      const confirmButton = document.createElement('button');
      confirmButton.textContent="CREATE";
      confirmButton.type='submit';
      confirmButton.classList.add('confirm');
      const cancelButton = document.createElement('button');
      cancelButton.textContent="CANCEL";
      cancelButton.classList.add('cancel');
      cancelButton.type="button";
      cancelButton.addEventListener("click",(e)=>{
        removeForm(e.target.parentNode.parentNode.parentNode.parentNode);
        removeErrorMessage();
        createAddProjectButton();
      })
      buttons.classList.add('formButtons');
      buttons.append(confirmButton,cancelButton);
      div.append(input,buttons);
      div.classList.add('form');
      form.append(div);
      form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let name = document.getElementById('projectName').value;

        if (Storage.find("Projects",name)){
          let childnodes =Array.from(projectsList.children);
          if(!childnodes.some(e=> e.textContent==errorMessage && e.classList.contains('error'))){
            let li=document.createElement('li');
            li.append(errorMessage);
            li.classList.add('error');
            projectsList.append(li);
          }
        }else{
          Storage.addItem("Projects",new Project(name));
          displayProjects();
          createAddProjectButton();
        }
      })
      li.append(form);
      projectsList.append(li);
    }
    addTaskButton.addEventListener('click',()=>{
      const div = document.createElement('div');
      const form =document.createElement('form');
      const name = document.createElement('input');
      const description = document.createElement('textarea');
      const dueDate = document.createElement('input');
      dueDate.type ='date';
      const priority = document.createElement('select');
      div.id="modal";
      form.append(name,description,dueDate,priority);
      div.append(form);
      right.append(div);
    })
    Storage.initializeLocalStorage();
    displayProjects();
    createAddProjectButton();
    return {
    };
  })();
export default UI;