import React from 'react';
import ClearLogo from '../../resources/icons/clear.svg'

function TodoListItem({
    todo,
    onDone,
    onDelete,
    editTodo,
    editId,
    handleEditChange,
    inputValue,
    setInputValue }) {

    const itemDisplay = () => {
        return (editId === todo._id) ? (
            <div className="TodoListItem__text--editing">
                <input
                    type="text"
                    value={inputValue}
                    
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => editTodo(todo._id, inputValue)}>Edit todo</button>
            </div>
        ) :
            (<div>
                <input type='checkbox' checked={todo.done} onChange={() => onDone(todo._id)}/>
                <span className="TodoListItem__text" onClick={(e) => handleEditChange(todo._id, todo.title)}>{todo.title}</span>
                <button className="TodoListItem__delete" onClick={() => onDelete(todo._id)} >
                    <img src={ClearLogo} alt="Clear item" style={{ height: '16px', width: '16px' }} />
                </button>
            </div>)
    };

    return (
        <li key={todo._id} className={'TodoListItem ' + (todo.done ? 'done' : 'not-done')} id={todo._id}>

            {itemDisplay()}

        </li>
    )
}

export default TodoListItem;