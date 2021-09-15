import React from 'react';
import {observer} from "mobx-react-lite";
import todosState from "../store/todosState";

const TodoList = observer(() => {
    return (
        <div>
            {!todosState.isLoading && <div>Completed: {todosState.completedCount}</div>}
            {
                todosState.todos.map(todo => (
                    <div key={todo.id} style={{marginTop: 10}}>
                        <button style={{marginRight: 5}} onClick={() => todosState.removeTodo(todo)}>X</button>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={e => todo.completed = e.target.checked}/>
                            {todo.id} {todo.title}
                        </label>
                    </div>
                ))
            }
            {todosState.isLoading && <div>Loading...</div>}
        </div>
    );
});

export default TodoList;