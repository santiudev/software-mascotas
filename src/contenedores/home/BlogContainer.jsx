import React from 'react'

import Blog from '../../componentes/home/blog'

import styles from '../../css/home/blogContainer.module.css'

const BlogContainer = () => {
  const data = [
    { parrafo: 'Lorem ipsum dolor sit amet' },
    { parrafo: 'Lorem ipsum dolor sit amet' },
    { parrafo: 'Lorem ipsum dolor sit amet' },
  ]
  return (
    <section className={styles.blogContainer}>
      {data.map((object, i) => (
        <Blog key={i} parrafo={object.parrafo}/>
        ))}
    </section>
  )
}

export default BlogContainer