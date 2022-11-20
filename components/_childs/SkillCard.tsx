import React from 'react'
import { motion } from 'framer-motion'
import style from '../../styles/cardskill.module.css'

type Props = {
    src: string,
    porcentagem: string
}

export default function SkillCard({ src, porcentagem }: Props) {
    return (
        <div className='relative'>
            <motion.div
                className={style.card_skill}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1,}}>
                <img src={src}/>


                <div className={style.card_percent} >
                    <div className={""}>
                        <p className={""}>{porcentagem}</p>
                    </div>
                </div>
            </motion.div>


        </div>
    )
}