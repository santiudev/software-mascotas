import React, {useState} from "react";
import styles from "../../../css/nav/BurgerMenu/BurgerMenu.module.css"
import BtnPrincipal from "../../principales/btnPrincipal";
import Formulario from '../../Formulario/formulario';

import { botones } from "../nav";
import BurgerItem from "./BurgerItem";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState(false)

    return(
        <div className={styles.burger_menu}>
            <ul className={`${styles.burger_menu__items} ${isOpen && styles.open}`}>
              {botones.map((btn, indice) => {
					      return (
						      <li>
                    <BurgerItem
                      to={btn.path}
                      key={indice}
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
            <div className={`${styles.burger_menu__toggle} ${isOpen && styles.open}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar