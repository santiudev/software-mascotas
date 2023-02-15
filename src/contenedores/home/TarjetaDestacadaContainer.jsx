import React from 'react'

// Components import
import TarjetaDestacada from '../../componentes/home/tarjetaDestacada'

// hook import
import useDataHoPet from '../../hooks/useDataHoPet'

// style import
import styles from '../../css/home/tarjetaDestacadaContainer.module.css'

const TarjetaDestacadaContainer = () => {
  const length = useDataHoPet().length
  const Data = useDataHoPet().slice(length - 6, length)
  return (
    <section className={styles.tarjetaDestacadaContainer} style={styles}>
      {Data.map((pet) => 
      (<TarjetaDestacada 
        key={pet.id} 
        image={pet.imagen} 
        length={pet.tamaño}
        date={pet.fecha}
        place={pet.lugar}
        contact={pet.contacto}
        description={pet.descripcion}
        />)
      )}
    </section>
  )
}

export default TarjetaDestacadaContainer