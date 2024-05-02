import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Footer.module.scss"
import { faCopyright, faEnvelope, faFileAlt } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { useMemo } from "react"

const Footer = () => {

    const links = useMemo(() => (
        [
            {href: "mailto:ckzhang2674@gmail.com", icon: faEnvelope},
            {href: "https://www.linkedin.com/in/chen-kai-zhang/", icon: faLinkedinIn},
            {href: "https://instagram.com/ken-kai-zhang", icon: faInstagram},
            {href: "https://github.com/dashboard", icon: faGithub},
            {href: "https://google.com", icon: faFileAlt},
        ]
    ), [])

    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                <FontAwesomeIcon icon={faCopyright} />
                <p>Chen Kai Zhang 2024</p>
            </div>
            <div className={styles.connect}>
                {
                    links.map(({href, icon}, i) => (
                        <a key={i} href={href} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={icon}/>
                        </a>
                    ))
                }
            </div>
        </div>  
    )

}

export default Footer