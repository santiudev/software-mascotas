import React from 'react'

// Components import
import TarjetaDestacada from '../../componentes/home/tarjetaDestacada'

// hook import
import useDataHoPet from '../../hooks/useDataHoPet'

// style import
import styles from '../../css/home/tarjetaDestacadaContainer.module.css'

const TarjetaDestacadaContainer = () => {
  const Data = useDataHoPet()
  return (
    <section className={styles.tarjetaDestacadaContainer} style={styles}>
      {Data.map(pet => (
        <TarjetaDestacada key={pet.id} image={pet.imagen}/>
      ))}
    </section>
  )
}

export default TarjetaDestacadaContainer