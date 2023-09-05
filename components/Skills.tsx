import React from 'react'
import { motion } from 'framer-motion'
// import Skill from './Skill'

type Props = {}
const Skill = ({name, x, y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-slate-400  shadow-orange-300 cursor-pointer absolute lg:py-2 lg:px-4 sm:text-sm sm:py-1.5 sm:px-3 text-xs p-1 '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{ x:x, y:y}}
        transition={{duration:1.5 }}
        >
          {name}
        </motion.div>
       
  )
}

function Skills({}: Props) {
  return (
    <div  className=' mt-20 md:mt-0'>
       <h3 className='uppercase tracking-[20px] text-blue-300 text-2xl md:text-3xl font-semibold z-20 text-center w-full py-12'>Skills</h3>
       <p className='mb-20 text-blue-200 text-center px-4 md:px-28 '>I&apos;ve worked as an IT support technician, a web developer, and partnered with great individuals to build digital solutions for both commercial and consumer usage. I&apos;m calm, confident, naturally interested, and always striving to improve my skills one challenge at a time.</p>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1.5}}
        className="w-full relative flex items-center justify-center rounded-full bg-circular h-[30vh] sm-[50vh]  md:h-[70vh]  lg:h-[80vh] "
       >
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-slate-400 shadow-orange-300 cursor-pointer lg:p-6 md:p-4 text-xs p-2'
        whileHover={{scale:1.05}}
        >web</motion.div>
        <Skill name="css" x="-8vw" y="-11vw"/>
        <Skill name="HTML" x="-20vw" y="2vw"/>
        <Skill name="Javascript" x="18vw" y="4vw"/>
        <Skill name="ReactJS" x="0vw" y="11vw"/>
        <Skill name="IT Support" x="28vw" y="-3vw"/>
        <Skill name="Nextjs" x="13vw" y="-10vw"/>
        <Skill name="GitHub" x="28vw" y="-12vw"/>
        <Skill name="Tailwind CSS" x="-27vw" y="-5vw"/>
        <Skill name="NodeJS" x="-30vw" y="8.5vw"/>
        <Skill name="MongoDB" x="-18vw" y="15vw"/>
        <Skill name="AngularJS" x="17vw" y="14vw"/>

           {/* <div className='absolute top-36 lg:top-40 grid grid-cols-3 md:grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
           </div> */}
    </motion.div>
    </div>
  )
}

export default Skills