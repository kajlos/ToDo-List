import Project from "./projects";
import Storage from "./storage";
const UI = (() => {
    const projectsList = document.getElementById('projects');        
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
        let li = document.createElement("li");
        li.append(name);
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
      input.id='projectName';
      input.type='text';
      input.placeholder='Name';
      input.required= true;
      const confirmButton = document.createElement('button');
      confirmButton.textContent="create";
      confirmButton.type='submit';
      confirmButton.classList.add('confirm');
      const cancelButton = document.createElement('button');
      cancelButton.textContent="cancel";
      cancelButton.classList.add('cancel');
      cancelButton.type="button";
      cancelButton.addEventListener("click",(e)=>{
        removeForm(e.target.parentNode.parentNode);
        removeErrorMessage();
        createAddProjectButton();
      })
      form.append(input, confirmButton, cancelButton);
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
    displayProjects();
    createAddProjectButton();
    Storage.initializeLocalStorage();
    return {

      
    };
  })();
export default UI;