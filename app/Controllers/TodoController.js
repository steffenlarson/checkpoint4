import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function

function _drawTodos() {

  let todos = ProxyState.todos
  let template = ''
  let count = 0
  // REVIEW we can put multiple things into a for each line? to do multiple things that are mostly unrelated?
  todos.forEach(todo => {
    template += todo.Template
    if (todo.completed !== true) {
      count++
    }
  })
  document.getElementById('todo-list').innerHTML = template
  document.getElementById('count').innerHTML = `${count}`
}


// NOTE Controllers only ever pass data back and forth. Or draw things. Render things to the page.

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
    // REVIEW I also still do not quite understand the form stuff. the prevent default and the window.event.target
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
    console.log(todoId)
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }


}
