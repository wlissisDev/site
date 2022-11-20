import React from 'react';
import style from '../../styles/cardproject.module.css';

type Props = {
    src:string
    title:string
    description: string
}

export default function ProjectCard({src, title, description}: Props) {
  return (
    <div className={style.card}>
        <img src={src} alt="projeto" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}