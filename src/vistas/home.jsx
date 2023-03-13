// React
import React, { useState } from 'react';

// Componentes
import Nav from "../componentes/nav/nav";
import LetraTitulo from '../componentes/principales/LetraTitulo';
import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraParrafo from "../componentes/principales/letraParrafo"
import Formulario from '../componentes/Formulario/formulario'
import Footer from '../componentes/Footer/Footer';
import SobreNosotros from '../componentes/home/sobreNosotros';
import Lista from "../componentes/principales/Lista"

// Css
import styles from "../css/home/home.module.css"

// Contenedores
import AdopcionesTarjetaContainer from '../contenedores/adopciones/adopcionesTarjetaContainer'
import TarjetaDestacadaContainer from '../contenedores/home/TarjetaDestacadaContainer';
import BlogContainer from '../contenedores/home/BlogContainer';

// Imágenes
import imgSobreNosotros from "../iconos/imagenes recursos/img-sobreNosotros.png"

const listaHistoria = [
  `Esta idea surgió de un punto de vista de querer ayudar a esas personas que quieren
  encontrar a sus amigos peludos extraviados, dando una mano desde la virtualidad
  para que puedan reencontrarse.`,
  `El equipo de trabajo se formo desde 0 buscando a gente interesada en trabajar
  en un proyecto relacionado con el rastro de mascotas con gente de diferentes
  provincias y paises.`,
  `Desafíos que se han presentado durante el desarrollo de la página y como se han solucionado.`
]

const listaMision = [
  "Cuál es el propósito de la página y que impacto se espera tener en la comunidad.",
  "Cuáles son los valores y principios que guían el trabajo del equipo.",
  "Cómo se espera que los usuarios utilicen la página y que beneficios pueden obtener de ella."
]

const Home = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <Nav />
        <section className={styles.header__section}>
          <LetraTitulo
            texto="Ayuda a reunir a las mascotas con sus familias"
            clase="letra-titulo--white"
          />
          <LetraParrafo
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
              corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
              excepturi saepe fugit eius nulla."
            clase="letra-parrafo--white"
          />
          <div className={styles.header__buttons}>
            <BtnPrincipal
              texto="Reportar"
              setModal={setModal}
            />
            <BtnPrincipal
              texto="Adoptar"
            />
          </div>
        </section>
      </header>
      <section className={styles["publicacion-destacada"]}>
        <LetraTitulo texto="PUBLICACION DESTACADA" clase={"letra-titulo--red"} />
        <h3>Cuando reporta una mascota perdida/encontrada, su publicación aparecerá aquí como publicación destacada.</h3>
        <TarjetaDestacadaContainer />
        <div className={styles["publicacion-destacada__buttons"]}>
          <BtnPrincipal texto="Encontrados"/>
          <BtnPrincipal texto="Perdidos"/>
      </div>
      </section>
      <div className={styles.adopciones}>
        <LetraTitulo texto="ADOPCIONES" clase="letra-titulo--red" align='center' />
        <AdopcionesTarjetaContainer />
        <div className={styles.header__buttons}>
          <BtnPrincipal texto="Ver más" />
        </div>
      </div>
      <LetraTitulo
            texto="BLOG"
            clase="letra-titulo--red"
            align='center'
          />
      <BlogContainer />
      <section className={styles["sobre-nosotros"]}>
        <LetraTitulo
          texto="Sobre Nosotros"
          clase="letra-titulo--red"
        />
        <article className={styles["sobre-nosotros__container"]}>
          <section className={styles["sobre-nosotros__section"]}>
            <h2>Historia</h2>
            {
              listaHistoria.map((lista, id)=>{
                return(
                  <Lista
                    texto={lista}
                    key={id}
                  />
                );
              })
            }
            <p>
              Nuestra página web surgió de la idea de unir a personas que han perdido
              a sus mascotas con aquellos que han encontrado a animales en la calle. 
              Al ser amantes de los animales, sabemos lo doloroso que es perder a un amigo peludo y
              lo gratificante que es poder ayudar a reunir a una mascota con su familia. Por eso,
              nos propusimos crear esta plataforma para facilitar la búsqueda de mascotas perdidas y
              ayudar a que puedan regresar a sus hogares.
            </p>
            <p>
              A lo largo del desarrollo de la página, hemos enfrentado desafíos técnicos y logísticos
              que han requerido soluciones creativas. Pero gracias a la colaboración y el trabajo en equipo,
              hemos logrado superar cada obstáculo y llevar adelante nuestro proyecto.
            </p>
          </section>
          <section className={styles["sobre-nosotros__section"]}>
          <h2>Misión y visión</h2>
          {
            listaMision.map((lista, id)=>{
              return(
                <Lista
                  texto={lista}
                  key={id}
                />
              );
            })
          }
          <p>
            Nuestra misión es ayudar a reunir a las mascotas perdidas con sus familias y fomentar
            la tenencia responsable de animales. Queremos crear una comunidad solidaria y comprometida
            con la protección de los animales, donde cada uno de nosotros pueda hacer su aporte para
            lograr este objetivo.
          </p>
          <p>
            En nuestra página , los usuarios pueden reportar a sus mascotas perdidas , buscar entre los animales
            encontrados y contactar a las personas que los encontraron. De esta manera facilitamos y agilizamos la
            búsqueda de mascotas y ayudamos a que puedan regresar a sus hogares.
          </p>
          <p>
            En nuestro equipo nos guían valores como el compromiso, la empatía y la solidaridad. Creemos que cada
            mascota perdida es un miembro de una familia que sufre su ausencia, y trabajamos con la convicción de
            que podemos ayudar a que se reencuentren.
          </p>
          </section>
        </article>
        <article className={styles["sobre-nosotros__container"]}>
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
        </article>
      </section>
      <Footer />

      { modal && <Formulario setModal={setModal} />}
    </>
  )
}

export default Home;