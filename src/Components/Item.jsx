import React from 'react';

function Item({ item, index, eliminarItem, marcarComprado }) {
  return (
    <li>
      <span style={{ textDecoration: item.comprado ? 'line-through' : 'none' }}>
        {item.nombre} - {item.cantidad}
      </span>
      <button onClick={() => marcarComprado(index)}>
        {item.comprado ? 'Desmarcar' : 'Comprar'}
      </button>
      <button onClick={() => eliminarItem(index)}>Eliminar</button>
    </li>
  );
}

export default Item;
