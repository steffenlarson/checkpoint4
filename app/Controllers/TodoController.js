import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {

  let todos = ProxyState.todos
  let template = ''
  todos.forEach(todo => {
    template += todo.Template
  })
  document.getElementById('todo-list').innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo() {
    window.event.preventDefault();
    var form = window.event.target;

    var todo = {
      description: form['description'].value
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    // @ts-ignore
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}