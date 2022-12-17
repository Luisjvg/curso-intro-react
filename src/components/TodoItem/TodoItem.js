import React from "react";
import { CheckIcon } from '../TodoIcons'
import { DeleteIcon } from '../TodoIcons'
import './TodoItem.css'

export function TodoItem(props){
    return(
        <li className="TodoItem">
            <CheckIcon
                onComplete={props.onComplete}
            />
            
            {/* <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >√</span> */}
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
            
            {/* <span className="Icon Icon-delete"
            onClick={props.onDelete}
            >X</span> */}
        </li>
    )
}