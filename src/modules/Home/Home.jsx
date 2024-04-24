import React from "react"
import { useState, useMemo } from "react"
import styles from "./Home.module.scss"

const Home = () => {

    const [index, setIndex] = useState(0)
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
    
    const handleDotClick = (e) => setIndex(Number(e.target.id))

    return (
        <React.Fragment>
            <div className={styles.intro} style={{ backgroundImage: `url(${background})`}}>
                <div className={styles.introContent}>
                    <div className={styles.introText}>
                        <h4>{title}</h4>
                        <h2>{subtitle}</h2>
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