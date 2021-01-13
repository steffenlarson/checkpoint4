export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id;
    this.completed = completed
    this.description = description
    this.count = 0
  }


  // REVIEW why does the !this.completed just run? what is it really saying?
  get Template() {
    if (!this.completed) {
      return `
    <li><input type="checkbox" onchange="app.todoController.toggleTodoStatus('${this.id}')">
     ${this.description} <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')">delete</button></li>
    `
    } else {
      return `
    <li><input type="checkbox" checked onchange="app.todoController.toggleTodoStatus('${this.id}')">
     ${this.description} <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')">delete</button></li>
    `
    }

  }
}








