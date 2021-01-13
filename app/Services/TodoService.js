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

  // REVIEW I do not understand how the put method works. Please help. I get the todo by finiding it by the id, and then because it is a toggle, that is all that is changing.
  // REVIEW functionality before the change request. Which is line 46?
  async toggleTodoStatus(todoId) {
    // let temp = ProxyState.todos
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo, DONE
    //		and if you did find one DONE
    //		change its completed status to whatever it is not (ex: false => true or true => false) DONE

    // NOTE this toggles the todo. This whole function is a put function. But it is a toggle change not a full complete change.
    if (todo.completed == false) {
      todo.completed = true
    } else {
      todo.completed = false
    }
    // console.log(todo.completed)
    // console.log(ProxyState.todos)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
    // ProxyState.todos = temp

    this.getTodos()

  }
  // REVIEW I am confused as to how the delete works if the res variable is not being used?
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

  // NOTE url variable is what is being placed into thes functions. That is what is getting appended onto the end of the url. then with the IDs we add them too to get the one we want.

}

const todoService = new TodoService();
export default todoService;