import Project from "./projects";
const UI = (() => {
    const projectsList = document.getElementById('projects');
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
      button.addEventListener('click',fsd);
    }
    const removeAddProjectButton = ()=>{
      const button = document.getElementById('projectButton');
      projectsList.removeChild(button);
    }
    const removeForm = (e)=>{
        projectsList.removeChild(e);
    }
    const fsd =()=>{
      removeAddProjectButton();
      const li = document.createElement('li');
      const form = document.createElement('form');
      const input = document.createElement('input');
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
        createAddProjectButton();
      })
      form.append(input, confirmButton, cancelButton);
      form.addEventListener('submit',(e)=>{
        e.preventDefault();
        removeForm(e.target.parentNode);
        createAddProjectButton();
      })
      li.append(form);
      projectsList.append(li);
    }
    createAddProjectButton();
    return {

      
      
      
      
      
      
    };
  })();
export default UI;