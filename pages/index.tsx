import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y  snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Wlisses Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skill */}
      <section id='skills' className='snap-start'>

        <Skill />
      </section>
      {/* Project */}

      <section id='projects' className='snap-start'>
        <Projects />

      </section>
      {/* Contant me */}

      <section id='contactme' className='snap-center'>

        <Contact />
      </section>
    </div>
  )
}
