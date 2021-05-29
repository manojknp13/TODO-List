import React, { useRef } from 'react';
import "./index.css";

const AddTodo = ({onSubmit}) => {

    const inputRef = useRef("");

    return (
        <div className="add-todo-container">
            <input type="text" ref={inputRef} placeholder="Write todo"/>
            <button onClick={() => {
                onSubmit(inputRef.current.value);
                inputRef.current.value = "";
                inputRef.current.focus()
            }}>
                Add
            </button>
        </div>
    )
}

export default AddTodo
