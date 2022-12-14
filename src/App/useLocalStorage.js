import React from "react";

export function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
    const [error, setError] = React.useState(false)
    const [sincronizedItem, setSincronizedItem] = React.useState(true)

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
          setSincronizedItem(true)
        } catch(error) {
          setError(error)
        }
      }, 1000)
    }, [sincronizedItem]);
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      } catch(error) {
        setError(error)
      }
    }
    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }
    return { 
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
  }