import React from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from '@heroicons/react/20/solid';
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
type Props = {}

function Contact({}: Props) {
    const { register, handleSubmit,} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => window.location.href = 'mailto:sophiesse143@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) ';
  return (
    
    <div className='min-h-screen flex flex-col justify-evenly items-center relative max-w-7xl mx-auto mb-20 space-y-36 lg:space-y-28 snap-center  '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-blue-300 text-2xl lg:text-3xl py-1 font-bold shadow shadow-slate-400 px-10 '>contact</h3>
        <div className='flex flex-col space-y-8'>
            <h4  className='text-xl sm:text-3xl font-semibold text-center text-[#6fa1c2] pt-5 lg:3 max-lg:0 '>I have got just what you need.<br /><span className='underline decoration-[#fcc867]/50'>Lets Talk</span></h4>
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
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto basis-1/2'>
                         <div className='flex md:flex-row flex-col  md:space-x-2 space-y-2 md:space-y-0'>
                             <input {...register("name")} className='contactInput' placeholder="Name" type="text" />
                             <input {...register("email")}className='contactInput' placeholder="Email"  type="email" />
                         </div>
                         <input {...register("subject")}
                          className='contactInput' placeholder="Subject"   type="text" />
                         <textarea {...register("message")} className='contactInput' placeholder="Message"   />
                         <button className='bg-[#ffe08a] py-5 px-10 rounded-md text-blue-950 font-bold text-lg' type='submit'>Submit</button>
                     </form>
        </div>
    </div>
</div>
    
  )
}

export default Contact