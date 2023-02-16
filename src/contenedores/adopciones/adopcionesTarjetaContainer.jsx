import React from 'react';

import AdopcionesTarjeta from '../../componentes/adopciones/adopcionesTarjeta';

import styles from '../../css/adopciones/adopcionesTarjetaContainer.module.css';

import useDataHoPet from '../../hooks/useDataHoPet.js';

const adopcionesTarjetaContainer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dataHoPet = useDataHoPet().slice(0, 4)
  return (
    <section className={styles.adopciones}>
      {dataHoPet.map(pet => (
        <AdopcionesTarjeta
          key={pet.id} 
          imagen={pet.imagen} 
          nombre={pet.nombre} 
          descripcion={pet.descripcion} />
      ))}
    </section>
  )
}

export default adopcionesTarjetaContainer