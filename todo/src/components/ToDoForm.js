import React from 'react';
import '../index.css';

const ToDoForm = props => {
    return (
        <form>
            <input 
                type="text" onChange={props.handleChange} 
                placeholder="Enter todo..."
                name="todo"
                value={props.todo}
                required
            />
            <button onClick={props.handleSubmit}>Submit</button>
        </form>
    )
}

export default ToDoForm;