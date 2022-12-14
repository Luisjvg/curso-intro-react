import React from "react";
import './TodoSearch.css'

export function TodoSearch({search, setSearch, loading }){

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return (
        <input className="TodoSearch" placeholder='Cebolla'
        value={search}
        onChange={onSearchValueChange}
        disabled={loading}
        />
    )
}