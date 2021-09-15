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
}

const todosState = new TodosState();
export default todosState;