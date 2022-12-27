import React from "react";

export function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);

        // window.addEventListener('storage', (change) =>{
        //     if(change.key === 'TODOS_V1'){
        //         console.log('Hubos cambios en TODO_V1');
        //         setStorageChange(false);
        //     }else{
        //         return null
        //     }
        // })

        return (
        <WrappedComponent
        show={storageChange}
        toggleShow={setStorageChange}
        />
        )
    }
}