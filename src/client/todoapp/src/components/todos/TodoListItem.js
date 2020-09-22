import React from 'react';
import ClearLogo from '../../resources/icons/clear.svg'

function TodoListItem(props) {
    return (
    <li key={props.data._id} className={'TodoListItem ' + (props.data.done ? 'done' : 'not-done')} id={props.data._id}>
        <button className="TodoListItem__text" onClick={(e) => props.onDone(e,props.data._id)}>{props.data.title}</button>
        <button className="TodoListItem__delete" onClick={(e) => props.onDelete(e,props.data._id)} ><img src={ClearLogo} alt="Clear item" style={{height:'16px', width: '16px'}}/></button>
    </li>
    )
}

export default TodoListItem;