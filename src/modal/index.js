import React from "react";
import ReactDOM  from "react-dom";
import './modal.css'



export function Modal({ children }){


    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}