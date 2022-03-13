import Project from "./projects";
const UI = (() => {
    const createProjectButton = document.getElementById('addProjectButton');
    const projectsList = document.getElementById('projects');
    const createForm=()=>{
      const form = document.createElement('form');
      const input = document.createElement('input');
      input.type='text';
      input.placeholder='Name';
      const confirmButton = document.createElement('button');
      const cancelButton = document.createElement('button');
      return form.append(input, confirmButton, cancelButton);
    }
    createProjectButton.addEventListener('click',()=>{
      const li = document.createElement('li');
      li.append(createForm());
      projectsList.append(li);
    })
    return {

      
    };
  })();
export default UI;