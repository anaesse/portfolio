import React from 'react'
import {SocialIcon} from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <div 
    className='sticky top-0 py-5 px-5 md:px-10 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        < motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale:1
        }}
        transition={{
            duration: 1.5
        }}
         className='flex flex-row items-center'
         >
            {/* Social Icons */}
            <SocialIcon url="https://www.linkedin.com/in/sophia-edeki" fgColor="#DAE3F0" bgColor="transparent" />
            <SocialIcon url="https://github.com/anaesse" fgColor="#DAE3F0" bgColor="transparent" />
            <SocialIcon url="https://wa.me/message/JWRAYZIHUCIXO1" network="whatsapp" fgColor="#DAE3F0" bgColor="transparent" />
            <SocialIcon url="https://twitter.com/_sophiesse" fgColor="#DAE3F0" bgColor="transparent" />
        </motion.div>
        <Link href={'#contact'}>
        <motion.div
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale:1.5
        }}
        transition={{
            duration: 1
        }}
         className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='#B3CFDC'
            bgColor='transparent' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400 '>Get In Touch</p>
        </motion.div>
        </Link>
    </div>
  )
}
