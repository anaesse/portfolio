import React, { useRef, useState } from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from '@heroicons/react/20/solid';
import emailjs from '@emailjs/browser';
type Props = {}

function Contact({}: Props) {
const form = useRef<HTMLFormElement>(null);

const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
    form.current
  ) {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('message sent', result);
          alert('Email sent successfully!');
        })
        .catch(
            (error) => {
          console.log(error.text);
        });
    }
    const resetForm = event.target as HTMLFormElement;
    resetForm.reset();
};
  return (
    
    <div className='min-h-screen flex flex-col justify-evenly items-center relative max-w-7xl mx-auto mb-20 space-y-36 lg:space-y-28 snap-center  '>
        <h3 className='absolute top-24 lg:top-20 uppercase tracking-[20px] text-blue-300 text-2xl lg:text-3xl py-1 font-bold shadow shadow-slate-400 px-10 '>contact</h3>
        <div className='flex flex-col space-y-8'>
            <h4  className='text-xl sm:text-3xl font-semibold text-center text-[#6fa1c2] pt-8  '>I have got just what you need.<br /><span className='underline decoration-[#fcc867]/50'>Lets Talk</span></h4>
        <div className='sm:space-x-6 space-y-6 flex flex-col lg:flex-row items-center'>
            <div className='basis-1/2 space-y-3'>
            <div className='flex items-center space-x-3 md:space-x-5 justify-center '>
                <PhoneIcon className='text-[#eed182] h-6 w-6 animate-pulse' />
                <p className='text-xl text-[#a8c8f8]'>+2348159584268</p>
            </div>
            <div className='flex items-center space-x-3 md:space-x-5 justify-center '>
                <EnvelopeIcon className='text-[#eed182] h-6 w-6 animate-pulse' />
                <p className='text-xl text-[#a8c8f8]'>sophia.p.edeki@gmail.com</p>
            </div>
            <div className='flex items-center space-x-3 md:space-x-5 justify-center '>
                <MapPinIcon className='text-[#eed182] h-6 w-6 animate-pulse' />
                <p className='text-xl text-[#a8c8f8]'>Abuja, Nigeria</p>
            </div>
            </div>
            <form ref={form} onSubmit={sendEmail}
            className='flex flex-col space-y-2 w-fit mx-auto basis-1/2'>
                         <div className='flex md:flex-row flex-col  md:space-x-2 space-y-2 md:space-y-0'>
                             <input className='contactInput' placeholder="Name" type="text"
                             name='name'
                             id='name'
                              />
                             <input className='contactInput' placeholder="Email"  type="email"
                             name='email' required
                             id='email'
                              />
                         </div>
                         <input
                          className='contactInput' placeholder="Subject"   type="text"
                          name='subject'
                          id='subject'
                          />
                         <textarea className='contactInput' placeholder="Message"
                         name='message'
                         id='message'
                         />
                         <button className='bg-[#ffe08a] py-5 px-10 rounded-md text-blue-950 font-bold text-lg' type='submit'>Send</button>
                     </form>
        </div>
    </div>
</div>
    
  )
}

export default Contact