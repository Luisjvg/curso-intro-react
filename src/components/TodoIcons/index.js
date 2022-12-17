import React from "react";
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import './TodoIcons.css'

export function CheckIcon(props){
    return <AiFillCheckCircle
        className="checkIcon"
        onClick={props.onComplete}
    />
}

export function DeleteIcon(props){
    return <AiFillCloseCircle
        className="deleteIcon"
        onClick={props.onDelete}
    />
}