import styles from "./NavigationBar.module.scss"

const NavigationBar = () => {
    return (
        <div className={styles.navigationbar}>
            <div className="logo">
                LOGO
            </div>
            <nav>
                <a href="/">HOME</a>
                <a href="/">EXPERIENCES</a>
            </nav>
        </div>
    )
}

export default NavigationBar