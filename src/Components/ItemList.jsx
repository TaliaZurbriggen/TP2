import React from 'react';

function ItemList({ items, eliminarItem, marcarComprado }) {
  return (
    <ul className='lista'>
      <h2>Artículos:</h2>
      {items.map((item, index) => (
        <li key={index} style={{ textDecoration: item.comprado ? 'line-through' : 'none' }}>
          {item.nombre} - {item.cantidad}
          
          <button onClick={() => marcarComprado(index)}>
            {item.comprado ? 'Desmarcar' : 'Comprado'}
          </button>
          <button onClick={() => eliminarItem(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;


