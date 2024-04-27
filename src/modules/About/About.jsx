import styles from "./About.module.scss"
import initData from "../../data/init.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { elementInView } from "../../util/elementInView"

const About = () => {

    const [showInfo, setShowInfo] = useState(false)
    const [eduInView, setEduInView] = useState(false)
    const [sklInView, setSklInView] = useState(false)

    useEffect(() => {
        setTimeout(() => setShowInfo(true), 3000)
    }, [])

    window.addEventListener("scroll", () => {
        if (!eduInView && elementInView(document.querySelector("#educations")))
            setEduInView(true)

        if (!sklInView && elementInView(document.querySelector("#skills")))
            setSklInView(true)
    })

    return (
        <div className={styles.about}>
            <div className={styles.intro}>
                <img src="https://source.unsplash.com/E48k2j6FF68" alt="profile_pic" />
                <div className={styles.introText}>
                    <p>{initData.about}</p>
                    <button>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <input placeholder="Ask more about me" />
                </div>
                <div 
                    className={styles.showInfoIndicator}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </div>
            </div>
            <div className={styles.info} style={{display: showInfo ? "flex" : "none"}}>
                <section 
                    id="educations" 
                    className={eduInView ? styles.showInfoSection : ""}
                >
                    <hr />
                    <h1>Education</h1>
                    <div>
                        <span>
                            <h3>Bachelor of Science - <i>University of California Santa Cruz</i></h3>
                            <h4>Basking School of Engineering and Computer Science</h4>
                            <p>2020 - 2022</p>  
                        </span>
                        <img src="image/ucsc_logo.png" alt="logo" />
                    </div>
                </section>

                <section 
                    id="skills"
                    className={sklInView ? styles.showInfoSection : ""}
                >
                    <hr />
                    <h1>Skills</h1>
                    <div>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>ReactJS</li>
                        </ul>
                        <ul>
                            <li>Fullstack Development</li>
                            <li>UI/UX Design</li>
                            <li>NodeJS</li>
                            <li>Valorant</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default About