import React from 'react'
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton' 

export function AppUI({
    totalTodos,
    completeTodos,
    search,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return(
    <React.Fragment>
        <TodoCounter
        total={totalTodos}
        completed={completeTodos}
      />
      <TodoSearch
        search={search}
        setSearch={setSearch}
      />
      <TodoList>
        {/* {error && <p>Desespérate, hubo un error...</p>} */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}

        {searchedTodos.map(todos => (
          <TodoItem 
          key={todos.text} 
          text={todos.text}
          completed={todos.completed}  
          onComplete={() => {completeTodo(todos.text)}}
          onDelete={() => {deleteTodo(todos.text)}}
          />
          ))}  
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
      )
}