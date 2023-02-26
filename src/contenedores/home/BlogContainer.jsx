import React, { useEffect, useState } from 'react'

import Blog from '../../componentes/home/blog'

import axios from 'axios'

import styles from '../../css/home/blogContainer.module.css'

const BlogContainer = () => {

  const [data, setData] = useState([{}])
  useEffect(() => {
    const fetchResponse = async() => {
      const response = await axios.get('/blog/')
      setData(response.data);
    };

    fetchResponse()
  },[])

  return (
    <section className={styles.blogContainer}>
    {data.map((object, i) => {
      return (<Blog key={i} title={object.title} content={object.content} img={object.img}/>)
    })}
    </section>
  )
  

}

export default BlogContainer