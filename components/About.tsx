
import React from 'react'
import { motion } from 'framer-motion'

import style from '../styles/about.module.css';

type Props = {}

export default function About({ }: Props) {
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
      <h3 className={style.title}>
        About
      </h3>

      <div className={style.content}>
        <motion.img
          initial={{
            x: -200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{
            x: 0, opacity: 1,
          }}
          viewport={{ once: false }}
          src='/images/about.jpeg'

          className={""}

        />
        <div className={style.info}>
          <h4 className=' text-4xl font-semibold'>Aqui está um <span className='underline decoration-[#f7ab0a]/50'>pouco</span> sobre mim.</h4>
          <p>
            Me chamo Wlisses, atualmente tenho 29 anos, estou cursando Ciências da Computação no Centro Universitário Farias Brito.
            Iniciei com a programação web front-end em 2020, mas só agora que decidi fazer carreira nessa área. Gosto de tecnologias diversas, e mais ainda da forma como elas podem 
            ajudar as pessoas.
          </p>
        </div>
      </div>
    </motion.div>
  )
}