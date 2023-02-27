import React, { useEffect, useState } from 'react'

import styles from '../../css/refugios/refugiosPetsContainer.module.css'

import RefugioCard from '../../componentes/refugios/RefugioCard'

const RefugiosPetsContainer = () => {

  const [pets, setPets] = useState([])

  useEffect(() => {
    const initialPets = [
      {
        title: 'gato',
        image: 'imagen1'
      },
      {
        title: 'perro',
        image: 'imagen2'
      }
    ]

    setPets(initialPets)
  },[])

  return (
    <section className={styles.petsContainer}>
      {pets.map((object, i) => (<RefugioCard key={i} title={object.title} image={object.image} />))}
    </section>
  )
}

export default RefugiosPetsContainer