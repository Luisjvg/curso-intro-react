import React from "react";
import { useTodos } from '../../App/useTodos'
import './TodoForm.css'

export function TodoForm ({ addTodo, setOpenModal }){
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Escribe el Todo que quieras"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="submit"
                    onClick={onSubmit}
                    className="TodoForm-button TodoForm-button--add">
                Añadir
                </button>
                <button
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel">
                Cancelar
                </button>
            </div>
        </form>
    )
}