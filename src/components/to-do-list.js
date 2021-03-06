import React from 'react';
import TodoListItem from './todo-list-item'
import './to-do-list.css'

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li className="list-group-item"
                key={id}>
                <TodoListItem {...itemProps} 
                onDeleted={() => onDeleted(id)}/>
            </li>
        )
    })
    return (
        <div className="listContainer">
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    );
}

export default TodoList;