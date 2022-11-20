import React from 'react'
import { motion } from 'framer-motion';
import style from '../../styles/cardexperience.module.css';
type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className={style.card}>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}

                alt="experiencia" src='/images/experiencia.png'
               />

            <div className={style.content}>
                <h4>Me contrate!</h4>
                <p>Em busca de experiência.</p>
                <span>Início: Mês Dia Ano - Fim: Mês Dia Ano</span>
                <ul>
                    <li>Marcos na empresa</li>
                    <li>Marcos na empresa</li>
                    <li>Marcos na empresa</li>

                </ul>

            </div>
        </article>
    )
}

export default ExperienceCard