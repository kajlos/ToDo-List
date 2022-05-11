/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\nconst UI = (() => {\r\n    const projectsList = document.getElementById('projects');\r\n    const addTaskButton = document.getElementById('addTask');\r\n    const body = document.querySelector('body');\r\n    const right = document.querySelector('.right');\r\n    let errorMessage=\"This project already exists\";\r\n    const createAddProjectButton = ()=>{\r\n      const text=\"Add project\"\r\n      const li = document.createElement('li');\r\n      li.id ='projectButton';\r\n      const img = document.createElement('img');\r\n      img.src=\"../dist/icons/plus.svg\";\r\n      img.classList.add('plus');\r\n      img.alt='';  \r\n      const button = document.createElement('button');\r\n      button.id = 'addProjectButton';\r\n      button.classList.add('project');\r\n      button.append(img,text);\r\n      li.append(button);\r\n      projectsList.append(li);\r\n      button.addEventListener('click',addProject);\r\n    }\r\n    const removeAddProjectButton = ()=>{\r\n      const button = document.getElementById('projectButton');\r\n      projectsList.removeChild(button);\r\n    }\r\n    const removeForm = (e)=>{\r\n      if(projectsList.firstChild){\r\n        projectsList.removeChild(e);\r\n      }\r\n    }\r\n    const removeProjects = ()=>{\r\n      while(projectsList.firstChild){\r\n        projectsList.removeChild(projectsList.lastChild);\r\n      }\r\n    }\r\n    const displayProjects =()=>{\r\n      removeProjects();\r\n      let projects = _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjects();\r\n      if(!projects==''){\r\n         projects.forEach(project => {\r\n        let name = project.name;\r\n        const removeButton = document.createElement('button');\r\n        const img = document.createElement('img');\r\n        img.src= \"../dist/icons/plus.svg\";\r\n        img.classList.add('rotate');\r\n        removeButton.append(img);\r\n        removeButton.addEventListener('click',(e)=>{\r\n          while(right.firstChild){\r\n            right.removeChild(right.firstChild);\r\n          }\r\n          let name = (e.target.parentNode.parentNode.textContent);\r\n          _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeProject(name);\r\n          displayProjects();\r\n          createAddProjectButton();\r\n          e.stopPropagation();\r\n        })\r\n        \r\n        const div = document.createElement('div');\r\n        div.append(name,removeButton);\r\n        div.classList.add('projects');\r\n        div.addEventListener('click',()=>{\r\n          displayTasks(name);\r\n        });\r\n        let li = document.createElement(\"li\");\r\n        li.append(div);\r\n        projectsList.append(li);\r\n        displayTasks(name);\r\n      });\r\n      }\r\n     \r\n    }\r\n    const removeErrorMessage=()=>{\r\n      let childnodes =Array.from(projectsList.children);\r\n      if(childnodes.some(e=>e.classList.contains('error'))){\r\n        let found = childnodes.find(e=>e.textContent==errorMessage);\r\n        projectsList.removeChild(found);\r\n      }\r\n    }\r\n    const addProject =()=>{\r\n      removeAddProjectButton();\r\n      const li = document.createElement('li');\r\n      const form = document.createElement('form');\r\n      const input = document.createElement('input');\r\n      const buttons = document.createElement('div');\r\n      const div= document.createElement('div');\r\n      input.id='projectName';\r\n      input.type='text';\r\n      input.placeholder='Name';\r\n      input.required= true;\r\n      const confirmButton = document.createElement('button');\r\n      confirmButton.textContent=\"CREATE\";\r\n      confirmButton.type='submit';\r\n      confirmButton.classList.add('confirm');\r\n      const cancelButton = document.createElement('button');\r\n      cancelButton.textContent=\"CANCEL\";\r\n      cancelButton.classList.add('cancel');\r\n      cancelButton.type=\"button\";\r\n      cancelButton.addEventListener(\"click\",(e)=>{\r\n        removeForm(e.target.parentNode.parentNode.parentNode.parentNode);\r\n        removeErrorMessage();\r\n        createAddProjectButton();\r\n      })\r\n      buttons.classList.add('formButtons');\r\n      buttons.append(confirmButton,cancelButton);\r\n      div.append(input,buttons);\r\n      div.classList.add('form');\r\n      form.append(div);\r\n      form.addEventListener('submit',(e)=>{\r\n        e.preventDefault();\r\n        let name = document.getElementById('projectName').value;\r\n\r\n        if (_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(\"Projects\",name)){\r\n          let childnodes =Array.from(projectsList.children);\r\n          if(!childnodes.some(e=> e.textContent==errorMessage && e.classList.contains('error'))){\r\n            let li=document.createElement('li');\r\n            li.append(errorMessage);\r\n            li.classList.add('error');\r\n            projectsList.append(li);\r\n          }\r\n        }else{\r\n          _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name));\r\n          displayProjects();\r\n          createAddProjectButton();\r\n        }\r\n      })\r\n      li.append(form);\r\n      projectsList.append(li);\r\n    }\r\n    const createBlackBackground =()=>{\r\n      const background = document.createElement('div');\r\n      background.id=\"background\";\r\n      body.append(background);\r\n    }\r\n    const removeBlackBackground = ()=>{\r\n      let nodes = Array.from(body.childNodes);\r\n      for(let i=0;i<nodes.length;i++){\r\n        if(nodes[i].id=='background'){\r\n          body.removeChild(nodes[i]);\r\n        }\r\n      }\r\n    }\r\n    const removeTaskForm=()=>{\r\n      let nodes = Array.from(body.childNodes);\r\n      for(let i=0;i<nodes.length;i++){\r\n        if(nodes[i].id=='modal'){\r\n          body.removeChild(nodes[i]);\r\n        }\r\n      }\r\n    }\r\n    const displayTasks = (projectName)=>{\r\n      let tasks = _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(projectName).getTasks();\r\n      let right = document.querySelector('.right');\r\n      while(right.firstChild){\r\n        right.removeChild(right.firstChild);\r\n      }\r\n      let h2 = document.createElement('h2');\r\n      h2.textContent = projectName;\r\n      right.append(h2);\r\n      tasks.forEach((task)=>{\r\n        let div = document.createElement('div');\r\n        let check = document.createElement('img');\r\n        let leftDiv = document.createElement('div');\r\n        let rightDiv = document.createElement('div');\r\n        let name = task.name;\r\n        let date = task.dueDate;\r\n        let priority = task.priority;\r\n        let isCompleted = task.isCompleted;\r\n        let removeTaskButton = document.createElement('button');\r\n        if(isCompleted){\r\n          div.classList.add('task',priority,'checked');\r\n          check.src=\"..//dist/icons/fullCheckbox.svg\";\r\n        }else{\r\n          div.classList.add('task',priority);        \r\n          check.src=\"..//dist/icons/emptyCheckbox.svg\";\r\n        }\r\n        let img = document.createElement('img');\r\n        img.src = \"../dist/icons/plus.svg\";\r\n        img.classList.add('rotate');\r\n        removeTaskButton.append(img);\r\n        removeTaskButton.addEventListener('click',(e)=>{\r\n          _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(projectName,name);\r\n          displayTasks(projectName);\r\n          e.stopPropagation();\r\n        });\r\n        check.addEventListener('click',(e)=>{\r\n          console.log(e.target.parentNode.parentNode);\r\n          if(e.target.parentNode.parentNode.classList.contains('checked')){\r\n            e.target.parentNode.parentNode.classList.remove('checked');\r\n            e.target.src=\"..//dist/icons/emptyCheckbox.svg\";\r\n            task.isCompleted = false;\r\n            _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTask(projectName,task);\r\n          }else{\r\n            e.target.parentNode.parentNode.classList.add('checked');\r\n            e.target.src=\"..//dist/icons/fullCheckbox.svg\";\r\n            task.isCompleted = true;\r\n            _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTask(projectName,task);\r\n          }\r\n        });\r\n        leftDiv.append(check,name);\r\n        rightDiv.append(date,removeTaskButton);\r\n        div.append(leftDiv,rightDiv);\r\n        right.append(div);\r\n      });\r\n\r\n\r\n    }\r\n    addTaskButton.addEventListener('click',()=>{\r\n      createBlackBackground();\r\n      const div = document.createElement('div');\r\n      const form =document.createElement('form');\r\n      const projects = _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjects();\r\n      const projectsSelect = document.createElement('select');\r\n      projectsSelect.id=\"projectTask\";\r\n      projects.forEach(e=>{\r\n        let option = document.createElement('option');\r\n        option.text=e.name;\r\n        projectsSelect.append(option);\r\n      })\r\n      const projectsDiv=document.createElement('div');\r\n      const projectsLabel = document.createElement('label');\r\n      projectsLabel.htmlFor=\"projectTask\";\r\n      projectsLabel.textContent=\"Project\";\r\n      projectsDiv.append(projectsLabel,projectsSelect);\r\n      const name = document.createElement('input');\r\n      const nameLabel = document.createElement('label');\r\n      nameLabel.textContent=\"Task Name\";\r\n      nameLabel.htmlFor=\"taskName\";\r\n      name.id=\"taskName\";\r\n      name.required=true;\r\n      const description = document.createElement('textarea');\r\n      const descriptionLabel=document.createElement('label');\r\n      descriptionLabel.textContent=\"Description\";\r\n      descriptionLabel.htmlFor=\"description\";\r\n      description.id='description';\r\n      description.required=true;\r\n      const dueDate = document.createElement('input');\r\n      const dueDateLabel = document.createElement('label');\r\n      dueDateLabel.textContent=\"Due Date\";  \r\n      dueDateLabel.htmlFor=\"dueDate\";\r\n      dueDate.id=\"dueDate\";\r\n      dueDate.required=true; \r\n      const priority = document.createElement('select');\r\n      const option1=document.createElement('option');\r\n      option1.textContent='Low';\r\n      const option2=document.createElement('option');\r\n      option2.textContent='Medium';\r\n      const option3=document.createElement('option');\r\n      option3.textContent='High';\r\n      priority.options.add(option1);\r\n      priority.options.add(option2);\r\n      priority.options.add(option3);\r\n      const priorityLabel = document.createElement('label')\r\n      priorityLabel.textContent=\"Priority\";\r\n      priorityLabel.htmlFor=\"priority\";\r\n      priority.id=\"priority\";\r\n      priority.required=true;\r\n      const confirmButton = document.createElement('button');\r\n      confirmButton.textContent=\"Add\";\r\n      confirmButton.classList.add('confirm');\r\n      const cancelButton = document.createElement('button');\r\n      cancelButton.textContent=\"Cancel\";\r\n      cancelButton.classList.add('cancel');\r\n      cancelButton.type=\"button\";\r\n      dueDate.type ='date';\r\n      let today = new Date().toISOString().slice(0, 10)\r\n      dueDate.min = today;\r\n      description.maxLength=250;\r\n      div.id=\"modal\";\r\n      const nameDiv=document.createElement('div');\r\n      nameDiv.append(nameLabel,name);\r\n      const descriptionDiv=document.createElement('div');\r\n      descriptionDiv.append(descriptionLabel,description);\r\n      const dueDateDiv = document.createElement('div');\r\n      dueDateDiv.append(dueDateLabel,dueDate);\r\n      const priorityDiv=document.createElement('div');\r\n      const priorityDivDiv=document.createElement('div');\r\n      priorityDivDiv.append(priorityLabel,priority);\r\n      priorityDiv.append(priorityDivDiv, projectsDiv);\r\n      const buttonDiv=document.createElement('div');\r\n      buttonDiv.append(confirmButton,cancelButton);\r\n      form.classList.add('taskForm');\r\n      form.addEventListener('submit',(e)=>{\r\n        e.preventDefault();\r\n        let name = document.getElementById('taskName').value\r\n        let description = document.getElementById('description').value;\r\n        let dueDate = document.getElementById('dueDate').value;\r\n        let priority = document.getElementById('priority').value;\r\n        let projectsSelect = document.getElementById('projectTask').value;\r\n        console.log(name,description,dueDate,priority,projectsSelect);\r\n        if(_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find('Projects',projectsSelect)){\r\n          _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(projectsSelect,new _tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"](name,description,dueDate,priority,false));\r\n          displayTasks(projectsSelect);\r\n          removeBlackBackground();\r\n          removeTaskForm();\r\n        }\r\n\r\n      })\r\n      cancelButton.addEventListener('click',()=>{\r\n        removeBlackBackground();\r\n        removeTaskForm();\r\n      })\r\n      form.append(nameDiv,descriptionDiv,dueDateDiv,priorityDiv,buttonDiv);\r\n      div.append(form);\r\n      body.append(div);\r\n    })\r\n    _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeLocalStorage();\r\n    displayProjects();\r\n    createAddProjectButton();\r\n    return {\r\n    };\r\n  })();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\r\nclass Project{\r\n    constructor(name){\r\n        this.name=name;\r\n        this.tasks = [];\r\n    }\r\n    getTasks(){\r\n        return this.tasks;\r\n    }\r\n    addTask(task){\r\n        this.tasks.push(task);\r\n    }\r\n    removeTask(task){\r\n        let index = this.tasks.map(object=>object.name).indexOf(task);\r\n        this.tasks.splice(index,1);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\r\nclass Storage{\r\n    static find(key,name){\r\n        let myArray =JSON.parse(localStorage.getItem(key));\r\n        if(myArray.find(e=> e.name == name)){\r\n            return true;\r\n        }else{\r\n            return false;\r\n        }\r\n    }\r\n    static addProject(name){\r\n        let myArray =JSON.parse(localStorage.getItem('Projects'));\r\n        myArray.push(name);\r\n        localStorage.setItem(\"Projects\",JSON.stringify(myArray));\r\n    }\r\n    static initializeLocalStorage(){\r\n        if (localStorage.getItem('Projects')){\r\n            return;\r\n        }\r\n        else{\r\n            let newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Inbox\");\r\n            let myArray=[];\r\n            myArray.push(newProject);\r\n            localStorage.setItem(\"Projects\",JSON.stringify(myArray));\r\n        }\r\n    }\r\n    static getProjects(){\r\n        return JSON.parse(localStorage.getItem(\"Projects\"));\r\n    }\r\n    static removeProject(name){\r\n        let projects = this.getProjects();\r\n        let index = projects.findIndex(e=>e.name===name);\r\n        if(index >=0){\r\n            projects.splice(index,1); \r\n            localStorage.setItem(\"Projects\",JSON.stringify(projects));\r\n        }\r\n    }\r\n    static getProject(name){\r\n        let projects = this.getProjects()\r\n        return Object.assign(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"],projects.find(e=>e.name == name));\r\n    }\r\n    static addTask(projectName,task){\r\n        let project = this.getProject(projectName);\r\n        project.addTask(task);\r\n        this.removeProject(projectName)\r\n        this.addProject(project);\r\n    }\r\n    static removeTask(projectName,task){\r\n        let project = this.getProject(projectName);\r\n        project.removeTask(task);\r\n        this.removeProject(projectName);\r\n        this.addProject(project);\r\n    }\r\n    static updateTask(projectName,task){\r\n        let project = this.getProject(projectName);\r\n        project.removeTask(task);\r\n        project.addTask(task);\r\n        this.removeProject(projectName);\r\n        this.addProject(project);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\r\n    constructor(name,description,dueDate,priority,isCompleted){\r\n        this.name =name;\r\n        this.description=description;\r\n        this.dueDate=dueDate;\r\n        this.priority=priority;\r\n        this.isCompleted = isCompleted\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;