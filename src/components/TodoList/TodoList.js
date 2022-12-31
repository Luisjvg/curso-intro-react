import React from "react";
import './TodoList.css' 

export function TodoList(props){
    const render = props.render || props.children
    if(props.sincronize){
        return (
            <section className="TodoList-container">
            {props.loading && props.onLoading()}
            </section>
            )
    }else{
        return(
            <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

            {props.searchedTodos.map(render)}

            <ul>
                {props.children}
            </ul>
        </section>
        )
    }
    
    // return(
    //     <section className="TodoList-container">
    //         {props.error && props.onError()}
    //         {props.loading && props.onLoading()}

    //         {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

    //         {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

    //         {props.searchedTodos.map(render)}

    //         <ul>
    //             {props.children}
    //         </ul>
    //     </section>
    // )
}