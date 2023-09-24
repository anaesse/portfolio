/* eslint-disable react/jsx-key */
import React from 'react'
import Image from 'next/image';
import chunkIt from '../public/assets/chunk-it.png'
import DAO from '../public/assets/fundusai.png'
import Blackjack from '../public/assets/black-jack.png'
import cal from '../public/assets/cal.png'
import UI from '../public/assets/UI.png'
import clock from '../public/assets/clock.png'
import { motion } from 'framer-motion'
type Props = {}

function Projects({}: Props) {
    const projects = [
      {
        id: "1",
        title: "Chunk IT",
        image: chunkIt,
        summary: "A web application that takes in large text files and chunks into smaller bits.",
        tech: "HTML, CSS, JS, Django"
      },
      {
        id: "2",
        title: "FundusAI",
        image: DAO,
        summary: "A company's website which informs the users about the services of the company.",
        tech: "CSS, JSx, React"
        
      },
      {
        id: "3",
        title: "Blackjack",
        image: Blackjack,
        summary: "A fun game. The game is a comparing card game scored by the total points. The highest point wins as long as it doesn't exceed 21.",
        tech: "HTML, CSS, JS"
      },
      {
        id: "4",
        title: "Faydecor",
        image: UI,
        summary: "Built a sample UI for a landing page.",
        tech: "HTML, CSS, Angular"
      },
      {
        id: "5",
        title: "Calculator",
        image: cal,
        summary: "An online calculator with an animated background.",
        tech: "HTML, CSS, JS"
      },
      {
        id: "5",
        title: "clock",
        image: clock,
        summary: "An online clock.",
        tech: "HTML, CSS, JS"
      },
    ];
  return (
    <div  className='flex flex-col text-center md:text-left max-w-full justify-evenly mx-auto items-center z-0 relative min-h-screen mb-32 '>
       <h3 className='absolute top-20 uppercase tracking-[20px] text-blue-300 text-2xl md:text-3xl py-1 font-bold shadow shadow-slate-400 px-10 '>Projects</h3>
          
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1.5}}
        className='flex flex-col text-center md:text-left max-w-full justify-evenly mx-auto items-center  absolute top-16'
       >
          
            <div className=' w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#070706] scrollbar-thumb-[#c7894f]'>
                {projects.map((project, i) => (
                  <div  key={project.id}>
                    <div className='w-screen flex flex-col flex-shrink-0 snap-center space-y-4 items-center md:text-left justify-center px-10 md:px-56 h-screen '>
                      <motion.div
                      initial={{
                        y: -300,
                        opacity: 0,
                      }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity:1, y:0 }}
                      viewport={{ once: true }}
                      >
                    <Image src={project.image} alt="project-image" height={525} width={1350} className='h-auto w-[30rem]' />
                        </motion.div>  
                    <div className='space-y-2 px-0 lg:px-10 max-w-xl'>
                        <h4  className='text-lg md:text-xl font-semibold text-center text-[#d1a276] '><span className='underline decoration-[#f7f2c9]'>case study {i + 1} of {projects.length}:</span>   {project.title}</h4>
                        <p className='text-base md:text-md text-center md:text-justify text-[rgb(196,167,128)]'>{project.summary}</p>
                        <small className='text-[#6e84cc] py-2 text-[12px]'>{project.tech}</small>
                    </div>
                </div>
                  </div>
                )) };
            </div>
           <div className='w-full absolute top-24 -z-10 left-0 bg-[#000] h-[450px] md:h-[400px] -skew-y-12'></div>

    </motion.div>
    </div>
  )
}

export default Projects