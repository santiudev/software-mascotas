/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

import styles from '../../css/Formulario/formulario.module.css'

import dog from '../../iconos/imagenes recursos/dog-seating.png'
import pet from '../../iconos/imagenes recursos/pet.png'
import close from '../../iconos/imagenes recursos/close.png'



/**
 Petype = es un booleano que indica si el formulario es para reportar una mascota 
 perdida o si es para reportar una mascota encontrada
 */

const formulario = ({ setModal }) => {
  
  const [ petType, setPetType ] = useState(false)
  
  const handleSubmit = () => {
    // Falta implementar el metodo post desde la API
    // Si petype = true se agrega el formulario a las mascotas perdidas
    return petType ? 1 : 0 
  }

  const handleCancel = () => {
    setModal(false)
  }
 
  return (
      <form 
        action='POST' 
        onSubmit={handleSubmit}
        className={styles.form}>
        <div className={styles.headerForm}> 
          <div className={styles.pet} onClick={() => setPetType(true)}>
            <img src={dog} alt="dog draw" /> Perdido
          </div>
          <div className={styles.pet} onClick={() => setPetType(false)}>
            <img src={pet} alt="pet draw" /> Encontrado
          </div>
          <button className={styles.cancelButton} onClick={handleCancel}>
            <img src={close} />
          </button>
        </div>
        <div className={styles.buttonFile}>
          <h2>Subir foto</h2>
          <input type="file" />
        </div>
        <section className={styles.form_inputs}>
          <div>
            <input type="text" name="size" placeholder='Tamaño' />
            <input type="text" name="zone" placeholder='Zona' />
          </div>
          <div>
            <input type="tel" name="contact" placeholder='Contacto' />
            <input type="date" name="date" placeholder='Fecha' />
          </div>
        </section>
        <textarea 
          name="description" 
          cols="30" 
          rows="10">
        </textarea>
        <button onClick={handleSubmit}>
          Enviar
        </button>
      </form>
  )
}

export default formulario