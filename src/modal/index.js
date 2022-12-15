import React from "react";
import ReactDOM  from "react-dom";
import './modal.css'



export function Modal(props){

    const closeModal = () => {
        props.setOpenModal(false)
    }

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="ModalTodos">
                <input placeholder='Escribe el Todo que quieras' className="ModalInput"></input>
                <div className="ModalButtons">
                    <button className="buttonAdd">Agregar</button>
                    <button className="buttonClose" onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}