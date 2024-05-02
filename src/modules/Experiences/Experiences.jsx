import { useMemo } from "react";
import { getScrollPercent } from "../../util/getScrollPercent";
import styles from "./Experiences.module.scss"

const Experiences = () => {

    const monthToNumber = useMemo(() => (
        {
            "Jan": 1,
            "Feb": 2,
            "Mar": 3,
            "Apr": 4,
            "May": 5,
            "Jun": 6,
            "Jul": 7,
            "Aug": 8,
            "Sep": 9,
            "Oct": 10,
            "Nov": 11,
            "Dec": 12
        }
    ), [])

    const experienceInfo = useMemo(() => [
        {
            year: 2024,
            experiences: [
                {
                    company: "Akamai",
                    position: "Full Stack Developer",
                    summary: "Designed and devlop an all in one platform for other Akamai engineers to monitor, modify, and explore team resources.",
                    skills: ["JavaScript", "Python", "Linux", "React", "Flask", "Frontend Development", "Backend Development"],
                    start: {month: "Jan", year: 2024},
                    end: {month: "Present", year: ""},
                    logo: "/image/akamai_logo.png",
                    details: ""
                }
            ]
        },
        {
            year: 2023,
            experiences: []
        },
        {
            year: 2022,
            experiences: [
                {
                    company: "Dolby",
                    position: "Software Engineer",
                    summary: "Automated the testing workflow for increased efficiency and decreased errors.",
                    skills: ["Python", "Javascript", "CICD"],
                    start: {month: "Jun", year: 2022},
                    end: {month: "Jun", year: 2023},
                    logo: "/image/dolby_logo.png",
                    details: ""
                }
            ]
        }

    ], [])

    const colorYear = (year, percent, limit) => {
        const text = document.querySelector(`#year-${year} .${styles.indicator}`)
        if (percent > limit) {
            text.classList.add(`${styles.active}`);
        } else {
            text.classList.remove(`${styles.active}`);
        }
    }

    window.addEventListener("scroll", () => {
        const { height: timelineHeight } = document.querySelector("#timeline").getBoundingClientRect();
        const line = document.querySelector("#line");
        const scrollPercent = getScrollPercent(document.querySelector("body"))
        line.style.height = `${(timelineHeight * scrollPercent) + 10}px`
        colorYear("2024", scrollPercent, 0.33)
        colorYear("2023", scrollPercent, 0.66)
        colorYear("2022", scrollPercent, 0.98)
    })

    return (
        <div className={styles.experiences}>
            <div id="timeline" className={styles.timeline}>
                <div className={styles.dot} />
                <div id="line" className={styles.line} />
                {
                    experienceInfo.map(({year, experiences}) => (
                        <section key={year} id={`year-${year}`}>
                            <div className={styles.expInfo}>
                                {
                                    experiences.map((exp, i) => {
                                        const { start, end } = exp
                                        return (
                                            <div 
                                                key={i}
                                                className={styles.exp}
                                                style={{bottom: `${monthToNumber[exp.start.month] * 8}%`}}
                                            >
                                                <span>
                                                    <h1>{`${exp.company} - `}<i>{exp.position}</i></h1>
                                                    <p>{`${start.month} ${start.year} - ${end.month} ${end.year}`}</p>
                                                </span>
                                                <img src={exp.logo} alt="logo" />  
                                                <div className={styles.summary}>{exp.summary}</div>                                 
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <p className={styles.indicator}>{year}</p>
                        </section>
                    ))
                }
            </div>
        </div>
    )

}

export default Experiences