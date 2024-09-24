import React, { useState } from 'react';

function ItemInput({ agregarItem }) {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== '' && cantidad > 0) {
      agregarItem({ nombre, cantidad, comprado: false });
      setNombre('');
      setCantidad(0);
    } else {
      alert('El nombre no puede estar vacío y la cantidad debe ser mayor a 0');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='contenedorInputs'>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del artículo"
          required
        />
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          placeholder="Cantidad"
          min="1"
          required
        />
      </div>
      <div className='contenedorButton'>
        <button type="submit">Agregar</button>
      </div>
      
    </form>
  );
}

export default ItemInput;
