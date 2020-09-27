import React from 'react';
import ClearLogo from '../../resources/icons/clear.svg'
import EdiText from 'react-editext'

function TodoListItem({
    todo,
    onDone,
    onDelete,
    editTodo
}) {

    const itemDisplay = () => {
        return (
            <React.Fragment>
                <input
                    type='checkbox'
                    checked={todo.done}
                    onChange={() => onDone(todo._id)} />
                <EdiText
                    type="text"
                    mainContainerClassName='EditText-wrapper'
                    value={todo.title}
                    inputProps={{ id: todo._id }}
                    showButtonsOnHover
                    editOnViewClick={true}
                    onSave={editTodo}
                    cancelOnUnfocus={true}
                    submitOnEnter={true}
                    cancelOnEscape={true} />
                <button className="TodoListItem__delete"
                    onClick={() => onDelete(todo._id)} >
                    <img
                        src={ClearLogo}
                        alt="Clear item"
                        style={{ height: '16px', width: '16px' }} />
                </button>
            </React.Fragment>
        )
    };

    return (
        <li
            key={todo._id}
            className={'TodoListItem ' + (todo.done ? 'done' : 'not-done')}
            id={todo._id}>
            {itemDisplay()}
        </li>
    )
}

export default TodoListItem;
