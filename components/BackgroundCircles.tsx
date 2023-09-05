import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.5, 0.1, 1.0],
        borderRadius: [ "20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5,
    }}
     className='relative flex justify-center items-center'>
        <div className='absolute border border-[#071a24] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#071a24] rounded-full w-[300px] h-[300px] mt-52 animate-ping' />
        <div className='absolute border border-[#071a24] rounded-full w-[400px] h-[400px] mt-52 animate-ping' />
        <div className='absolute border border-orange-300 rounded-full opacity-20 w-[500px] h-[500px]  lg:w-[560px] lg:h-[560px] mt-52 animate-pulse' />
        <div className='absolute border border-[#071a24] rounded-full w-[650px] h-[650px] mt-52 animate-ping' />
    </motion.div>
  )
}

export default BackgroundCircles 