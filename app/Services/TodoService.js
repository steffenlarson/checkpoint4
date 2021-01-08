import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";


let url = 'SteffenLarson/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);

    console.log(res.data);

    //TODO Handle this response from the server
    ProxyState.todos = res.data.map(u => new Todo(u))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    console.log(res.data)

  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;