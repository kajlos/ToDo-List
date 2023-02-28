import Project from './projects';
import Storage from './storage';
import Task from './tasks';
const UI = (() => {
  const projectsList = document.getElementById('projects');
  const addTaskButton = document.getElementById('addTask');
  const body = document.querySelector('body');
  const right = document.querySelector('.right');
  const addProjectButton = document.getElementById('addProjectButton');
  let errorMessage = 'This project already exists';
  const removeForm = e => {
    if (projectsList.firstChild) {
      projectsList.removeChild(e);
    }
  };
  const removeProjects = () => {
    while (projectsList.firstChild) {
      projectsList.removeChild(projectsList.lastChild);
    }
  };
  const removeRightContent = () => {
    right.innerHTML = '';
  };
  const displayProjects = () => {
    removeProjects();
    let projects = Storage.getProjects();
    if (!projects == '') {
      projects.forEach(project => {
        let name = project.name;
        const span = document.createElement('span');
        span.textContent = name;
        const removeButton = document.createElement('button');
        const img = document.createElement('img');
        img.src = './icons/plus.svg';
        img.classList.add('rotate');
        removeButton.append(img);
        removeButton.addEventListener('click', e => {
          removeRightContent();
          let name = e.target.parentNode.parentNode.textContent;
          Storage.removeProject(name);
          displayProjects();
          e.stopPropagation();
        });

        let li = document.createElement('li');
        li.addEventListener('click', () => {
          displayTasks(name);
        });
        li.classList.add('project');
        li.append(span, removeButton);
        projectsList.append(li);
        displayTasks(name);
      });
    }
  };
  const removeErrorMessage = () => {
    let childnodes = Array.from(projectsList.children);
    if (childnodes.some(e => e.classList.contains('error'))) {
      let found = childnodes.find(e => e.textContent == errorMessage);
      projectsList.removeChild(found);
    }
  };
  const addProject = () => {
    if ([...projectsList.children].some(e => e.dataset.open === 'true')) return;
    const li = document.createElement('li');
    li.dataset.open = true;
    const form = document.createElement('form');
    const input = document.createElement('input');
    const buttons = document.createElement('div');
    const div = document.createElement('div');
    input.id = 'projectName';
    input.type = 'text';
    input.placeholder = 'Name';
    input.required = true;
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'CREATE';
    confirmButton.type = 'submit';
    confirmButton.classList.add('confirm');
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'CANCEL';
    cancelButton.classList.add('cancel');
    cancelButton.type = 'button';
    cancelButton.addEventListener('click', e => {
      removeForm(e.target.parentNode.parentNode.parentNode.parentNode);
      removeErrorMessage();
    });
    buttons.classList.add('formButtons');
    buttons.append(confirmButton, cancelButton);
    div.append(input, buttons);
    div.classList.add('form');
    form.append(div);
    form.addEventListener('submit', e => {
      e.preventDefault();
      let name = document.getElementById('projectName').value;

      if (Storage.find('Projects', name)) {
        let childnodes = Array.from(projectsList.children);
        if (!childnodes.some(e => e.textContent == errorMessage && e.classList.contains('error'))) {
          let li = document.createElement('li');
          li.append(errorMessage);
          li.classList.add('error');
          projectsList.append(li);
        }
      } else {
        Storage.addProject(new Project(name));
        displayProjects();
      }
    });
    li.append(form);
    projectsList.append(li);
  };
  const createBlackBackground = () => {
    const background = document.createElement('div');
    background.id = 'background';
    body.append(background);
  };
  const removeBlackBackground = () => {
    let nodes = Array.from(body.childNodes);
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id == 'background') {
        body.removeChild(nodes[i]);
      }
    }
  };
  const removeTaskForm = () => {
    let nodes = Array.from(body.childNodes);
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id == 'modal') {
        body.removeChild(nodes[i]);
      }
    }
  };
  const displayTasks = projectName => {
    let tasks = Storage.getProject(projectName).getTasks();
    let right = document.querySelector('.right');
    while (right.firstChild) {
      right.removeChild(right.firstChild);
    }
    let h2 = document.createElement('h2');
    h2.textContent = projectName;
    right.append(h2);
    tasks.forEach(task => {
      let div = document.createElement('div');
      let check = document.createElement('img');
      let leftDiv = document.createElement('div');
      let rightDiv = document.createElement('div');
      let name = task.name;
      let date = task.dueDate;
      let priority = task.priority;
      let isCompleted = task.isCompleted;
      let removeTaskButton = document.createElement('button');
      if (isCompleted) {
        div.classList.add('task', priority, 'checked');
        check.src = './icons/fullCheckbox.svg';
      } else {
        div.classList.add('task', priority);
        check.src = './icons/emptyCheckbox.svg';
      }
      let img = document.createElement('img');
      img.src = './icons/plus.svg';
      img.classList.add('rotate');
      removeTaskButton.append(img);
      removeTaskButton.addEventListener('click', e => {
        Storage.removeTask(projectName, name);
        displayTasks(projectName);
        e.stopPropagation();
      });
      check.addEventListener('click', e => {
        if (e.target.parentNode.parentNode.classList.contains('checked')) {
          e.target.parentNode.parentNode.classList.remove('checked');
          e.target.src = './icons/emptyCheckbox.svg';
          console.log(task);
          task.uncompleteTask();
          Storage.updateTask(projectName, task);
        } else {
          e.target.parentNode.parentNode.classList.add('checked');
          e.target.src = './icons/fullCheckbox.svg';
          task.completeTask();
          Storage.updateTask(projectName, task);
        }
        e.stopPropagation();
      });
      leftDiv.append(check, name);
      rightDiv.append(date, removeTaskButton);
      div.append(leftDiv, rightDiv);
      right.append(div);
    });
  };
  addTaskButton.addEventListener('click', () => {
    createBlackBackground();
    const div = document.createElement('div');
    const container = document.createElement('div');
    container.classList.add('container');
    const form = document.createElement('form');
    const projects = Storage.getProjects();
    const projectsSelect = document.createElement('select');
    projectsSelect.id = 'projectTask';
    projectsSelect.classList.add('taskFormInput');
    projects.forEach(e => {
      let option = document.createElement('option');
      option.text = e.name;
      projectsSelect.append(option);
    });
    const projectsDiv = document.createElement('div');
    const projectsLabel = document.createElement('label');
    projectsLabel.htmlFor = 'projectTask';
    projectsLabel.textContent = 'Project';
    projectsDiv.append(projectsLabel, projectsSelect);
    const name = document.createElement('input');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Task Name';
    nameLabel.htmlFor = 'taskName';
    name.id = 'taskName';
    name.required = true;
    name.classList.add('taskFormInput');
    const dueDate = document.createElement('input');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    dueDateLabel.htmlFor = 'dueDate';
    dueDate.id = 'dueDate';
    dueDate.required = true;
    dueDate.classList.add('taskFormInput');
    const priority = document.createElement('select');
    const option1 = document.createElement('option');
    option1.textContent = 'Low';
    const option2 = document.createElement('option');
    option2.textContent = 'Medium';
    const option3 = document.createElement('option');
    option3.textContent = 'High';
    priority.options.add(option1);
    priority.options.add(option2);
    priority.options.add(option3);
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.htmlFor = 'priority';
    priority.id = 'priority';
    priority.required = true;
    priority.classList.add('taskFormInput');
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Add';
    confirmButton.classList.add('confirm');
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel');
    cancelButton.type = 'button';
    dueDate.type = 'date';
    let today = new Date().toISOString().slice(0, 10);
    dueDate.min = today;
    div.id = 'modal';
    const nameDiv = document.createElement('div');
    nameDiv.append(nameLabel, name);
    const dueDateDiv = document.createElement('div');
    dueDateDiv.append(dueDateLabel, dueDate);
    const priorityDiv = document.createElement('div');
    const priorityDivDiv = document.createElement('div');
    priorityDiv.classList.add('columns');
    priorityDivDiv.append(priorityLabel, priority);
    priorityDiv.append(priorityDivDiv, projectsDiv);
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('columns');
    buttonDiv.append(confirmButton, cancelButton);
    form.addEventListener('submit', e => {
      e.preventDefault();
      let name = document.getElementById('taskName').value;
      let dueDate = document.getElementById('dueDate').value;
      let priority = document.getElementById('priority').value;
      let projectsSelect = document.getElementById('projectTask').value;
      console.log(name, dueDate, priority, projectsSelect);
      if (Storage.find('Projects', projectsSelect)) {
        Storage.addTask(projectsSelect, new Task(name, dueDate, priority, false));
        displayTasks(projectsSelect);
        removeBlackBackground();
        removeTaskForm();
      }
    });
    cancelButton.addEventListener('click', () => {
      removeBlackBackground();
      removeTaskForm();
    });
    container.append(nameDiv, dueDateDiv, priorityDiv, buttonDiv);
    form.append(container);
    div.append(form);
    body.append(div);
  });
  addProjectButton.addEventListener('click', addProject);
  Storage.initializeLocalStorage();
  displayProjects();

  return {};
})();
export default UI;
