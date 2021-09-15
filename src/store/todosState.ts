import {makeAutoObservable} from "mobx";
import Todo from "../models/Todo";
import axios from "axios";

class TodosState {
    constructor() {
        makeAutoObservable(this);
        this.fetchTodos();
    }

    isLoading = true;
    todos: Todo[] = [];

    async fetchTodos() {
        const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=15");
        this.todos = response.data;
        this.isLoading = false;
    }

    get completedCount() {
        return this.todos.filter(t => t.completed).length;
    }

    removeTodo(todo: Todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
    }
}

const todosState = new TodosState();
export default todosState;