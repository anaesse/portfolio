'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 bg-[#002336] scrollbar scrollbar-track-[#070706] scrollbar-thumb-[#cbcefa]' >
      <div>
        <section>
        < Header />
        </section>
       <section id='hero' className='snap-start'>
        < Hero />
       </section>
       <section id='about' className='snap-center'>
        < About />
        <Skills />
    < Education />
       </section>
       <section id='experience' className='snap-center'>
        < WorkExperience />
       </section>
       <section id='projects' className='snap-start'>
        < Projects />
       </section>
       <section id='contact' className='snap-start '>
        < Contact />
       </section>
       <Link href={'#hero'}>
        <footer className='sticky bottom-2 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <div className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer bg-slate-400 flex items-center justify-center animate-bounce'>👆</div>
          </div>
        </footer>
       </Link>
        
      </div>
    </main>
  )
}
