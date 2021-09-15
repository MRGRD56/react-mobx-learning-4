import React from 'react';
import {observer} from "mobx-react-lite";
import todosState from "../store/todosState";

const TodoList = observer(() => {
    return (
        <div>
            {!todosState.isLoading && <div>Completed: {todosState.completedCount}</div>}
            {
                todosState.todos.map(todo => (
                    <div key={todo.id}>
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