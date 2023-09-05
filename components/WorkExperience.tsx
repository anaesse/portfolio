import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from './ExperienceCard'
type Props = {}
export default function WorkExperience({}: Props) {
  return (
    <div className='min-h-screen flex flex-col justify-evenly items-center  w-full mx-auto  overflow-hidden'>
        <h3 className='mt-32 lg:mt-32 uppercase tracking-[15px] sm:tracking-[20px] text-blue-300 text-xl sm:text-2xl md:text-3xl py-1 font-bold shadow shadow-slate-400 px-10 '>Experience</h3>
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1.5}}
        className='w-full flex flex-row items-center space-x-8 py-20 px-6 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-[#db9669] scrollbar-thumb-black'>
           {Experiences.map((Experience) => (
        <div key={Experience.id}>
    <div className='h-[75vh]'>
    <article className='flex flex-col rounded-[20px] shadow-inner  shadow-slate-300 items-start   flex-shrink-0 w-[300px] h-[85vh] md:h-[70vh] lg:h-[60vhz] md:w-[500px] lg:w-[600px] md:snap-center bg-[#132e3d3d] px-5  md:px-10  py-10  mx-auto space-y-4  opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200  relative'>
      <motion.div
      initial={{
        x:-100,
        opacity:0,
      }}
      transition={{duration: 1.5}}
      whileInView={{ opacity:1, x:0 }}
      viewport={{ once: true }}
      className='w-full space-y-4'
      >
        <h4 className='text-2xl md:text-3xl lg:text-4xl font-light text-orange-100'>{Experience.title}</h4>
        <p className='font-bold text-2xl text-orange-200'>{Experience.company} </p>
        <small className=' text-orange-300'> {Experience.place} </small>
      </motion.div>
      <div className='space-y-2'>
        <div  className='flex items-center space-x-2 z-30 text-orange-400'>
        {Experience.technologies.map((Tech) => (
           <div  key={Experience.id}>
          <p >{Tech}</p>
          {/* <p>{Experience.technologies[1]}</p>
          <p>{Experience.technologies[2]}</p> */}
        </div>
        ))}
        </div>
          <p className='uppercase py-2 text-[#4a94dfde]'> {Experience.startdate} - {Experience.enddate} </p>
          <p className='text-base text-blue-300'>{Experience.summary}</p>
      </div>

    </article>
    </div>
        </div>
      ))}
    </motion.div>
    </div>
  )
}