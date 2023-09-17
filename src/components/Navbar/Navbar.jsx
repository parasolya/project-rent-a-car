import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";


import items from "./items";

// const getFullName = ({isActive}) => {
//     return isActive ? `${styles.link} ${styles.active}` : styles.link;
// }

const Navbar = ()=> {
    const elements = items.map(({id, text, link}) => <li key={id}>
        <NavLink className={styles.link} to={link}>{text}</NavLink>
    </li>);

    return (
        <div className={styles.wrapper}>
        <ul className={styles.menu}>
            {elements}
        </ul>
        <div className={styles.flagY}></div>
        <div className={styles.flagB}></div>
        </div>
    )
}

export default Navbar;