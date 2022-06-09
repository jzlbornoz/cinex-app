import { useState } from 'react';

const useLocalStorage = (itemName, initialValue) => {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    };

    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };
    return [
        item,
        saveItem,
    ];
}

export { useLocalStorage }

//Este custom hook recibe dos valores, el nombre de la version y lo que va a guardar o initial state, 
// Luego lo convierte en string, para posteriormente volverlo a cambiar a JSON