/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import styles from '../../css/home/blog.module.css'

const blog = ({ parrafo }) => {
  return(
    <article className={styles.blog}>
      <img src="" alt="blog image" />
      <p>{parrafo}</p>
      <a>Leer mas +</a>
    </article>
    
  )
}

export default blog