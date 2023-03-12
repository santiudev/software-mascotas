/* eslint-disable default-case */
import React, { useEffect, useState } from 'react'

import Blog from '../../componentes/home/blog'

import axios from 'axios'

import styles from '../../css/home/blogContainer.module.css'

import arrowLeft from '../../iconos/bx-chevron-left.svg'
import arrowRight from '../../iconos/bx-chevron-right.svg'
const BlogContainer = () => {

  const [data, setData] = useState([{}])
  useEffect(() => {
    const fetchResponse = async() => {
      const response = await axios.get('/blog/')
      setData(response.data);
    };

    fetchResponse()
  },[])

  const handleMove = (direction) => {
    const blogs = document.querySelector('.blogContainer')
    let translateValue = ''
    switch(direction) {
      case 'front': translateValue='-50'; break;
      case 'back':  translateValue='50'; break;
    }
    
    blogs.style.transform = `translateX(${translateValue}%)`

  }

  return (
    <section className={styles.blogMegaContainer}>
      <button onClick={() => handleMove('back')}>
        <img src={arrowLeft} alt="" />
      </button>
      <section className={`${styles.blogContainer} blogContainer`}>
      {data.map((object, i) => {
        return (<Blog key={i} title={object.title} content={object.content} img={'#'}/>)
      })}
      </section>
      <button onClick={() => handleMove('front')}>
        <img src={arrowRight} alt="" />
      </button>
    </section>
  )
  

}

export default BlogContainer