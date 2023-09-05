import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import phieeyah7 from '../public/assets/phieeyah7.jpg'
type Props = {
    directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group cursor-pointer'>
        <motion.div
        initial={{
            x: directionLeft ? -200 : 200,
            opacity:0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        >
            <Image src={phieeyah7 } alt=''
            className='rounded-full border-blue-300 h-20 w-20 xl:h-24 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out object-cover '
            />
        </motion.div>
    </div>
  )
}

export default Skill