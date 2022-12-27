import React from "react";
import { withStorageListener } from "./withStorageListener";


export function ChangeAlert ({show, toggleShow}){
    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                onClick={() => toggleShow(false)}>
                Volver a cargar la información</button>
            </div>
        )
    }else{
        return null
    }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
