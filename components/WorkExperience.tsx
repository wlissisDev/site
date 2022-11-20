import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './_childs/ExperienceCard'
import style from '../styles/workexperience.module.css'
type Props = {}

export default function WorkExperience({ }: Props) {



    return (
        <motion.div
            className={style.container}
            initial={{

                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
            }}
        >
            <h3
                className={style.title}
            >Experience</h3>

            <div  className={style['list_experiences']} id={style.snap_inline}>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />


            </div>

        </motion.div>
    )
}