import React, { useState } from 'react';
import ItemInput from './Components/ItemInput';
import ItemList from "./Components/ItemList";
import './App.css';

function ListaDeCompras() {
  const [items, setItems] = useState([]);


  const agregarItem = (item) => {
    if (item && item.cantidad > 0) {
      setItems([...items, item]);
    }
  };


  const eliminarItem = (index) => {
    const nuevosItems = items.filter((_, i) => i !== index);
    setItems(nuevosItems);
  };

  
  const marcarComprado = (index) => {
    const nuevosItems = [...items];
    nuevosItems[index].comprado = !nuevosItems[index].comprado;
    setItems(nuevosItems);

    const sortedItems = nuevosItems.sort((a, b) => a.comprado - b.comprado);
    setItems(sortedItems);
  };

  return (
    <div className='app'>
      <h1>Lista de Compras</h1>
      <ItemInput agregarItem={agregarItem} />
      <ItemList
        items={items} 
        eliminarItem={eliminarItem} 
        marcarComprado={marcarComprado}
      />
    </div>
  );
}

export default ListaDeCompras;



