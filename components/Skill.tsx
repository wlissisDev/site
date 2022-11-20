import React from 'react'
import { motion } from 'framer-motion';
import SkillCard from './_childs/SkillCard';
import style from '../styles/skill.module.css'
type Props = {}

export default function Skill({ }: Props) {
  return (
    <motion.div
      initial={{

        opacity: 0
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        opacity: 1,
      }}
      className={style.container}>
      <h3 className={style.title}>Skill</h3>
      <h4>Passe o mouse na skill para ver o meu nível de conhecimento</h4>
      <div className={style.list_cards}>
        <SkillCard  porcentagem='94%' src={"/images/html.png"} />
        <SkillCard  porcentagem='91%' src={"/images/css.png"} />
        <SkillCard  porcentagem='90%' src={"/images/js.png"} />
        <SkillCard  porcentagem='82%' src={"/images/styled.png"} />
        <SkillCard  porcentagem='87%' src={"/images/react.png"} />
        <SkillCard  porcentagem='70%' src={"/images/git.png"} />
        <SkillCard  porcentagem='80%' src={"/images/node.png"} />
        <SkillCard  porcentagem='65%' src={"https://tailwindcss.com/_next/static/media/social-square.eab77323.jpg"} />
      </div>
    </motion.div>
  )
}