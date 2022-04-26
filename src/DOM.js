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
      const projects = Storage.getProjects();
      const projectsSelect = document.createElement('select');
      projects.forEach(e=>{
        let option = document.createElement('option');
        option.text=e.name;
        projectsSelect.append(option);
      })
      const projectsDiv=document.createElement('div');
      const projectsLabel = document.createElement('label');
      projectsLabel.htmlFor="projectTask";
      projectsLabel.textContent="Project";
      projectsDiv.append(projectsLabel,projectsSelect);
      const name = document.createElement('input');
      const nameLabel = document.createElement('label');
      nameLabel.textContent="Task Name";
      nameLabel.htmlFor="taskName";
      name.id="taskName";
      name.required=true;
      const description = document.createElement('textarea');
      const descriptionLabel=document.createElement('label');
      descriptionLabel.textContent="Description";
      descriptionLabel.htmlFor="description";
      description.id='description';
      description.required=true;
      const dueDate = document.createElement('input');
      const dueDateLabel = document.createElement('label');
      dueDateLabel.textContent="Due Date";  
      dueDateLabel.htmlFor="dueDate";
      dueDate.id="dueDate";
      dueDate.required=true; 
      const priority = document.createElement('select');
      const option1=document.createElement('option');
      option1.textContent='Low';
      const option2=document.createElement('option');
      option2.textContent='Medium';
      const option3=document.createElement('option');
      option3.textContent='High';
      priority.options.add(option1);
      priority.options.add(option2);
      priority.options.add(option3);
      const priorityLabel = document.createElement('label')
      priorityLabel.textContent="Priority";
      priorityLabel.htmlFor="priority";
      priority.id="priority";
      priority.required=true;
      const confirmButton = document.createElement('button');
      confirmButton.textContent="Add";
      confirmButton.classList.add('confirm');
      dueDate.type ='date';
      description.maxLength=250;
      div.id="modal";
      const nameDiv=document.createElement('div');
      nameDiv.append(nameLabel,name);
      const descriptionDiv=document.createElement('div');
      descriptionDiv.append(descriptionLabel,description);
      const dueDateDiv = document.createElement('div');
      dueDateDiv.append(dueDateLabel,dueDate);
      const priorityDiv=document.createElement('div');
      const priorityDivDiv=document.createElement('div');
      priorityDivDiv.append(priorityLabel,priority);
      priorityDiv.append(priorityDivDiv, projectsDiv);
      const buttonDiv=document.createElement('div');
      buttonDiv.append(confirmButton);
      form.classList.add('taskForm');
      form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let name = document.getElementById('taskName').value
        let description = document.getElementById('description').value;
        let dueDate = document.getElementById('dueDate').value;
        let priority = document.getElementById('priority').value;
        console.log(name,description,dueDate,priority);
      })
      form.append(nameDiv,descriptionDiv,dueDateDiv,priorityDiv,buttonDiv);
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