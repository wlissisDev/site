import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './_childs/BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: ["Olá! Meu nome é Wlisses!", "E eu sou...", "<Desenvolvedor Web/>"],
        loop: true,
        delaySpeed: 1000,

    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img src="/images/perfil.jpeg" alt="perfil" className='relative rounded-full w-32 h-32 mx-auto object-cover' />
            <div className='z-20'>
                <h2 className='text-sm uppercase  text-gray-500 pb-2 tracking-[15px]' >Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold  px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>

                <div>
                    <Link href="#about">
                        <button className='heroButton'>Sobre</button>
                    </Link>
                    <Link href="#experience">
                    <button className='heroButton'>Experiência</button>
                    </Link>
                    <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                    <button className='heroButton'>Projetos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}