import React from 'react';

// import './App.css';

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem('itemName', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else{
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem)
        setLoading(false)
      } catch(error) {
        setError(error)
      } finally{
        setLoading(false)
      }
    }, 1000)
  });
  
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    } catch(error) {
      setError(error)
    }
  }

  return { 
    item,
    saveItem,
    loading,
    error
  };
}


function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  
  const [search, setSearch] = React.useState('')
  
  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  /*Array donde preguntaremos si el valor total del array es mayor o igual a 1.
  
  En caso de no se así, mostraremos los "todos" que incluyan alguna letra del searchText*/
  let searchedTodos = [];

  if (!search.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  

  /*Funcion con parametro (texto), aqui buscaremos en el index de los "todos" si el todo.text es igual a el texto que le pasemos*/
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodo = [...todos];
    newTodo[todoIndex].completed = true
    saveTodos(newTodo);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  }; 
  
  return (
    <React.Fragment>
      <AppUI 
        totalTodos={totalTodos}
        completeTodos={completedTodos}
        search={search}
        setSearch={setSearch}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deteleTodo={deteleTodo}
      />
    </React.Fragment>
  );
}

export default App;

