import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function TodoItemDetails({title,description}){
    const [title, setTitle] = useState("");

    return (
        <div className="TodoItem-details">
            <div className="TodoItem-details__title">
                <span className="TodoItem-details__title-text">{title}</span>
            </div>
            <div className="TodoItem-details__content">
                <span className="TodoItem-details__content-text">{description}</span>
            </div>
        </div>
    )

}
export default TodoItemDetails;