import React from 'react';
import './index.css';

const Todos = ({ todos }) => {


    return (
        <div className="todos">
            <h4 className="heading-4">{`Total Items (${todos.length})`}</h4>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            {todo.label}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todos
