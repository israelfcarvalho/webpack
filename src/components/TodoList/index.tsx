import React, { useState } from 'react';
import {List} from 'immutable';

import './style.scss';

export interface Todo {
    id: number;
    description: string;
    isChecked: boolean
}

export interface PropsTodoList {
    todoList: List<Todo>
}

const TodoList: React.FC<PropsTodoList> = ({
    todoList
}) => {
    const [_todoList, set_todoList] = useState(todoList)

     const handleChangeTodoItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        const value = Number.parseInt(event.target.value);

        set_todoList(_todoList.map(
            todo => todo.id !== value ? todo : {...todo, isChecked: checked}
        ));
    }

    return(
        <ul className="TodoList">
            {_todoList.map(todo => (
                <li key={todo.id} className={`TodoList__item ${todo.isChecked ? 'checked' : ''}`}>
                    <input type="checkbox" value={todo.id} onChange={handleChangeTodoItem} checked={todo.isChecked}/>
                    <div>{todo.description}</div>
                    <div>
                        {todo.isChecked ? 'Done' : 'Pending'}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;