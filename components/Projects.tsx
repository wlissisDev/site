import React from 'react'
import style from '../styles/projects.module.css'
import ProjectCard from './_childs/ProjectCard'

type Props = {}


export default function Projects({ }: Props) {

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        Projects
      </h3>
      <div className={style.list_projects}>
        <ProjectCard
          src="/images/projetos/landingpage.jpg"
          description="É um clone de um projeto em figma que encontrei 
                      na internet e produzi para praticar 
                      um pouco de HTML, flex-box e outras estilizações com CSS"
          title='Landing-page' />

        <ProjectCard
          src="/images/projetos/pokedex.png"
          description="Projeto próprio que criei consumindo uma PokeAPI gratuita na internet."
          title='Pokedéx' />

        <ProjectCard
          src="/images/projetos/receitas.png"
          description="Uma aplicação que usa uma API de receitas que gera
                     aleatoriamente algumas opções de receitas"
          title='Receitas de Comidas' />
      </div>

    </div>
  )
}