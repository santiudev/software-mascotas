import React from 'react'

import Blog from '../../componentes/home/blog'

import useAPI from '../../hooks/useAPI'

import styles from '../../css/home/blogContainer.module.css'

const BlogContainer = () => {
  const data = useAPI('blog/')
  console.log(data)
  return (
    <section className={styles.blogContainer}>
      {true ?? data.map((object) => (
        <Blog key={object.id} title={object.title} parrafo={object.content} image={object.img}/>
        ))}
    </section>
  )
}

export default BlogContainer