import React, {useEffect, useRef, useState} from "react";
import styles from "../../../css/nav/BurgerMenu/BurgerMenu.module.css"
import BtnPrincipal from "../../principales/btnPrincipal";
import Formulario from '../../Formulario/formulario';

import { botones } from "../nav";
import BurgerItem from "./BurgerItem";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const divRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!divRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      const handleScroll = () => {
        setIsOpen(false);
      };
  
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }, [setIsOpen]);

    return(
        <div className={styles.burger_menu}>
            <ul className={`${styles.burger_menu__items} ${isOpen && styles.open}`}>
              {botones.map((btn, indice) => {
					      return (
						      <li key={indice}>
                    <BurgerItem
                      to={btn.path}
                      texto={btn.texto}
                    >
						        </BurgerItem>
                  </li>
					      );
				      })}
              <li>
                <BtnPrincipal texto="Reportar" setModal={setModal} />
              </li>
            </ul>
            {modal && <Formulario setModal={setModal} />}
            <div
              className={`${styles.burger_menu__toggle} ${isOpen && styles.open}`}
              onClick={ () => setIsOpen(!isOpen)} 
              ref={divRef}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar