export default class Task {
  constructor(name, dueDate, priority, isCompleted) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }
  completeTask() {
    this.isCompleted = true;
  }
  uncompleteTask() {
    this.isCompleted = false;
  }
}
