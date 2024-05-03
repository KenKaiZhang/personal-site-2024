import React from "react"
import { useState, useMemo } from "react"
import styles from "./Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Home = () => {

    const [index, setIndex] = useState(0)
    const [exit, setExit] = useState(false)
    const contents = useMemo(() => 
        [
            {
                title: "ABOUT",
                subtitle: "A little about myself",
                background: "https://source.unsplash.com/g30P1zcOzXo",
            },
            {
                title: "EXPERIENCE",
                subtitle: "The shit I have gone through",
                background: "https://source.unsplash.com/cbPh8sfpP70",
            }
        ]
    , []) 

    const {title, subtitle, background} = useMemo(() => contents[index], [contents, index])
    
    const handleDotClick = (e) =>{ 
        setExit(true);
        setTimeout(() => {
            setIndex(Number(e.target.id))
            setExit(false)
        }, 1000)
    }
    
    return (
        <React.Fragment>
            <div 
                key={index} 
                className={` ${styles.intro} ${!exit ? styles.introZoomIn : ""}`} 
                style={{ backgroundImage: `url(${background})`}}
            >
                <div className={styles.introContent}>
                    <div 

                        className={`
                            ${styles.introText} 
                            ${exit
                                ? styles.introTextExit
                                : styles.introTextEnter
                            }
                        `}>
                        <h4>{title}</h4>
                        <span>
                            <h2>{subtitle}</h2>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                    <div className={styles.slideDot}>
                        {
                            contents.map((_, i) => 
                                <div 
                                    key={i} 
                                    id={i} 
                                    className={index === i ? styles.activeDot : ""}
                                    onClick={handleDotClick}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home