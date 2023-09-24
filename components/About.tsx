import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import phieeyah from '../public/assets/phieeyah.png'
import Link from 'next/link';
type Props = {}

export default function About({}: Props) {
  return (
    <>
    <div className=' min-h-screen flex flex-col text-center justify-evenly mx-auto items-center snap-x snap-mandatory max-w-7xl'>
    <h3 className='uppercase tracking-[20px] text-blue-300 text-2xl md:text-3xl py-1 font-bold shadow shadow-slate-400 px-10 mt-20 lg:mt-32 '>About</h3>
    <h4 className='text-2xl md:text-4xl py-10 font-medium text-[#ffaf37] tracking-[20px]'>PASSION FUELS PURPOSE!</h4>   
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1.5}}
        className=' flex flex-col lg:flex-row text-center lg:text-left justify-center mx-auto items-center  px-10  lg:px-24'>
        <motion.div
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{x:0, opacity: 1}}
        viewport={{once: true}}
        className='flex-shrink-0'
        >
            <Image src={phieeyah} alt='aboutimage' height={3072} width={2048} className='rounded-full h-44 w-44 mx-auto md:w-64 md:h-64 md:rounded-br-[50%] md:rounded-tl-[50%] md:rounded-bl-[50%] md:rounded-tr-[0] my-5 md:my-0'  />
            </motion.div>
        <div className='px-0 md:pl-10 '>
            <p className='text-[#f7c99e] text-sm md:text-base'>Hi, I&apos;m Phieeyah, a Front-end web developer and IT support Technician with a passion for creating beautiful, functional and user-centered digital experiences.
            <br />
            <br />
            For the most part, you will find me coding and building beautiful things. When I am not doing those, you will catch me doing music, reading, making beads, learning something new or listening to messages from my favourite preachers.
            <br/>
            <br/>
            With over 3years of experience in the Tech. field, I am always looking for new and innovative ways to bring my client&apos;s visions to life.
            <br/>
            <br/>
            Whether I am working on a website or maintaining and repairing IT systems, I bring my commitment, excellence and user-centered thinking to every project I work on. I look forward to the opportunity of bringing my skills and passion to your next project.

            </p>
            <div className='flex justify-end py-4'>
            <Link href="/sophiaEdeki.pdf" target={"_blank"} download={true} className='h-10 w-20 rounded-md cursor-pointer bg-[#ffaf37] flex items-center justify-center animate-pulse text-[#10123f] font-bold' > Resume</Link>
            </div>
        </div>
    </motion.div>
    </div>
 
    </>
  )
}