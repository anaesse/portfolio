import LiIcon from './LiIcon'
type Props = {}
const Details = ({course, time, place, info}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon />
        <div>
            <h3 className='capitalize font-bold text-base md:text-2xl text-[#ffaf37]'>{course}</h3>
            <span className='capitalize font-bold text-xs md:text-sm text-[#d1a276]'>
                {time} | {place}
            </span>
            <p className='font-medium  text-xs sm:text-sm text-[#f7c99e] md:text-base w-full'>{info}</p>
        </div>
    </li>
}

function Education({}: Props) {
  return (
    <div className=' mt-24 md:mt-60 h-screen'>
    <h3 className='uppercase tracking-[15px] md:tracking-[20px] text-blue-300 text-2xl md:text-3xl font-semibold px-10 pb-10 text-center w-full'>Education</h3>
     <div className='w-full md:w-[75%] mx-auto relative'>
        <div  
        className='absolute left-4 md:left-6  top-0 w-[4px] h-full bg-sky-800 origin-top ' />
        
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
                course="Bachelor of Engineering In Computer Engineering"
                time="2015-2021"
                place="University of Ilorin"
                info="Completed a Bachelor's project on IOT, Relevant courses included Embedded systems and IOT, Computer Networks, CyberSecurity, Software Architectures, Software engineering, computer maintenance... "
            />
            <Details
                course="Online Coursework"
                time="2018-2023"
                place="Coursera,CISCO,FreeCodeCamp, Zuri,Programming Hub and Sololearn, "
                info="Completed Course work in topics such as HTML5, CSS and Javascript Essentials, Google IT Support, IT Basics ... "
            />
           
        </ul>
    </div>
    </div>
  )
}

export default Education