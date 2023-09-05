import React from 'react'
// import phieeyah8 from '../public/assets/phieeyah8.jpg'
import { FaReact, FaGithub, FaNodeJs, FaBootstrap, FaAngular} from 'react-icons/fa'
import {SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiJavascript,SiMongodb, SiDjango, SiPython } from 'react-icons/si'
type Props = {}
export const Experiences = [
  {
    id: "1",
    title: "Volunteer Frontend Engineer",
    company: "Black Mental Health Matters(BMHM)",
    place: "Texas (USA)",
    // eslint-disable-next-line react/jsx-key
    technologies:[ <FaReact/>, <SiTailwindcss/> , <SiTypescript/>, < FaGithub />],
    startdate:"Feb. 2022" ,
    enddate:"Present",
    summary: "I work with a team resposible for the structure and design of web pages, building reusable code for future use, developing features to enhance user experience, optimizing web pages for maximum speed and scalability."
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Fundus AI",
    place: "Abuja",
    // eslint-disable-next-line react/jsx-key
    technologies:[ <FaReact/>, <SiTailwindcss/> , <SiJavascript/>, <FaGithub/>],
    startdate:"Dec. 2022",
    enddate:"Dec. 2022",
    summary: "Worked with client to build website from scratch, optimised the website for the user experience,translated UX and business requirements into elogant code solutions, delivered responsive web design project using react."
  },
  {
    id: "3",
    title: "Full-stack Web Developer",
    company: "Studio Bantu",
    place: "UYO",
    // eslint-disable-next-line react/jsx-key
    technologies:[<FaReact/>,  <FaBootstrap/>, <SiCss3/> ,<SiJavascript/>, <FaGithub/>, <FaNodeJs/>, <SiMongodb/> ],
    startdate:"Oct. 2022",
    enddate:"Nov. 2022",
    summary: "Responsible for both the front-end and back-end design of website, created the user interface,ensured the website has a reponsive design, ensured information is processed correctly between the server and browser., "
  },
  {
    id: "2",
    title: "Full-stack Web Developer",
    company: "Codekago Interactive",
    place: "UYO",
    // eslint-disable-next-line react/jsx-key
    technologies:[ <FaReact/>, <FaBootstrap/>, <SiCss3/> ,<SiJavascript/>, <FaGithub/>, <FaNodeJs/>, <SiMongodb/>, <FaAngular />,<SiTailwindcss/>, <SiHtml5/> ],
    startdate:"Nov. 2021",
    enddate:"Oct. 2022",
    summary: "worked with a team responsible for both the front-end and back-end design of websites, worked with HTML, CSS, and Javascript(and related frameworks) to craft client-facing sites or applications, worked with specialised developers and designers to create a fully-round product."
  },
  {
    id: "3",
    title: "Full-stack Web Developer",
    company: "ZURI Training",
    place: "UYO",
    // eslint-disable-next-line react/jsx-key
    technologies:[<SiHtml5/>, <SiCss3/>,<SiJavascript/>,<SiPython/>, <SiDjango/>  ],
    startdate:"May 2022",
    enddate:"Aug. 2022",
    summary: "Trained as a full-stack developer where i worked on projects using HTML5, CSS3, Javascript, python and django, Worked with a team to build an app that can chunk large files into smaller files."
  },
  {
    id: "4",
    title: "IT Support Intern",
    company: "Nigerian National Petroleum Corporation (NNPC)",
    place: "Abuja",
    // eslint-disable-next-line react/jsx-key
    technologies:[ <SiHtml5/>, <SiCss3/>, <SiJavascript/>,<FaBootstrap/> ],
    startdate:"May 2019",
    enddate:"Oct. 2019",
    summary: "Worked with a team to maintain the organisations IT infrastructure and networks, install and configure hardware and software systems, respond to service issues and request, provide technical support accross the company,build a website to help other Interns understand how the department works and be more efficient. "
  },
  {
    id: "5",
    title: "IT Support Technician",
    company: "Smartec Computers LTD",
    place: "Abuja",
    technologies:[  ],
    startdate:"Aug. 2018",
    enddate:"Oct. 2018",
    summary: "Provided IT support to customers, repaired and replaced equipments, fixed and maintained the hardware and software system of the company and clients, "
  }
]

export default function ExperienceCard({}: Props) {
  return (
    <div>
     
    </div>
  )
}