import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";


let url = 'SteffenLarson/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);

    console.log(res.data);

    //TODO Handle this response from the server DONE
    ProxyState.todos = res.data.map(u => new Todo(u))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server DONE
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    console.log(res.data)

  }

  async toggleTodoStatus(todoId) {
    // let temp = ProxyState.todos
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo, DONE
    //		and if you did find one DONE
    //		change its completed status to whatever it is not (ex: false => true or true => false) DONE

    if (todo.completed == false) {
      todo.completed = true
    } else {
      todo.completed = false
    }
    console.log(todo.completed)
    console.log(ProxyState.todos)
    // NOTE trying to tie the .completed attribute to the checkbox.
    // if (todo.completed == false) {

    // }


    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
    // ProxyState.todos = temp

    // this.getTodos()

  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own DONE
    //		what is the request type DONE
    //		once the response comes back, how do you update the state DONE
    let res = await api.delete(url + todoId)

    ProxyState.todos = ProxyState.todos.filter(todo => todo.id != todoId)
  }

  // checkTodo() {

  //   let count = 0
  //   ProxyState.todos.forEach(todo => {

  //   });
  // }



}

const todoService = new TodoService();
export default todoService;