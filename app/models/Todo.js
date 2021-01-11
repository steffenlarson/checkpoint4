export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id;
    this.completed = completed
    this.description = description
  }

  get Template() {
    if (this.completed == 'false') {
      return `
    <li><input type="checkbox" onchange="app.todoController.toggleTodoStatus('${this.id}')"> ${this.description} <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')">delete</button></li>
    `
    } else {
      return `
    <li><input type="checkbox"  onchange="app.todoController.toggleTodoStatus('${this.id}')"> ${this.description} <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')">delete</button></li>
    `
    }

  }
}










//  "Todo": {
// "completed": {
//   "type": "Boolean",
//     "required": true,
//       "default": false
// },
// "description": {
//   "type": "String",
//     "required": true
// },
// "user": {
//   "type": "String",
//     "required": true