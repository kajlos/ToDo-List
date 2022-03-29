import Project from "./projects";
const UI = (() => {
    const createProjectButton = document.getElementById('addProjectButton');
    const projectsList = document.getElementById('projects');
    // const createForm=()=>{
    //   const li = document.createElement('li');
    //   const form = document.createElement('form');
    //   const input = document.createElement('input');
    //   input.type='text';
    //   input.placeholder='Name';
    //   const confirmButton = document.createElement('button');
    //   const cancelButton = document.createElement('button');
    //   form.append(input, confirmButton, cancelButton);
    //   li.append(form);
    //   projectsList.append(li);
    // }
    createProjectButton.addEventListener('click',()=>{
      const li = document.createElement('li');
      const form = document.createElement('form');
      const input = document.createElement('input');
      input.type='text';
      input.placeholder='Name';
      const confirmButton = document.createElement('button');
      confirmButton.textContent="create";
      confirmButton.classList.add('confirm');
      confirmButton.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e);
        
        
        
        
        
      })
      const cancelButton = document.createElement('button');
      cancelButton.textContent="cancel";
      cancelButton.classList.add('cancel');
      cancelButton.type="button";
      form.append(input, confirmButton, cancelButton);
      li.append(form);
      projectsList.append(li);
    })
    return {

      
      
      
    };
  })();
export default UI;