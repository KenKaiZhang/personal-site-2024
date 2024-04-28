import styles from "./NavigationBar.module.scss"
import Logo from "../Logo/Logo.jsx"
import { useLocation } from "react-router-dom"

const NavigationBar = () => {

    // const [play, setPlay] = useState(false);


    // const delayNavigate = (e) => {
    //     e.preventDefault();
    //     setPlay(true)
    //     setTimeout(() => {
    //         window.location.href = e.target.href
    //         setPlay(false)
    //     }, 500)
    // }

    const isHome = useLocation().pathname === "/"

    return (
        <div className={`${styles.navigationbar} ${isHome ? styles.home : ""} `}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav>
                <a href="/" >HOME</a>
                <a href="/about" >ABOUT</a>
                <a href="/" >EXPERIENCES</a>
            </nav>
        </div>
    )
}

export default NavigationBar