import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,

      }}
      animate={{
        scale: [1, 2, 2, 1],
        opacity:[0.1,0.3,0.6,0.9]
      }}
      transition={{
        duration: 1.5
      }}
      className='relative flex justify-center items-center pointer-events-none'>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='border border-[#333333] rounded-full h-[300px] w-[300px] absolute  mt-52' />
      <div className='border border-[#333333] rounded-full h-[500px] w-[500px] absolute  mt-52' />
      <div className='rounded-full border border-[#f7ab0a] h-[650px] w-[650px] absolute  mt-52 animate-pulse' />
      <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute  mt-52 animate-pulse' />
    </motion.div>
  )
}