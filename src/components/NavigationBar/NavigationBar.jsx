import styles from "./NavigationBar.module.scss"
import Logo from "../Logo/Logo.jsx"
import { Link, useLocation } from "react-router-dom"

const NavigationBar = () => {

    const isHome = useLocation().pathname === "/"

    return (
        <div className={`${styles.navigationbar} ${isHome ? styles.home : ""} `}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/about" >ABOUT</Link>
                <Link to="/experiences" >EXPERIENCES</Link>
            </nav>
        </div>
    )
}

export default NavigationBar