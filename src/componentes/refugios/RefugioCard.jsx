import React from 'react'

import styles from '../../css/refugios/refugiosCard.module.css'

const RefugioCard = ({title, image}) => {
  return (
    <article className={styles.refugiosCard}>
      <img src={image} alt={title} />
    </article>
  )
}

export default RefugioCard