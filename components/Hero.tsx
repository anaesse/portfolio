import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import phieeyah2 from '../public/assets/phieeyah6.png'
import Link from 'next/link';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi👋 , The name's Sophie Edeki",
            "Girl who loves learning",
            "<But loves to code more 🤭/>"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center max-w-7xl overflow-hidden'>
        <BackgroundCircles />
        <Image 
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
        src= {phieeyah2} alt='porfolio-image' width={2048} height={3072}
        />
        <div className='z-20'>

            <h2 className='text-sm uppercase text-[#4ca9c0] tracking-[6px]'>Turning vision into reality</h2>
        <h1 className='py-2 text-2xl sm:text-3xl lg:text-4xl font-semibold px-10'>
            <span className='text-[#c8e5f5] mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div>
            <Link href={'#about'} >
            <button className='heroButton'>About</button>
            </Link>
            <Link href={'#experience'} >
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href={'#projects'} >
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero