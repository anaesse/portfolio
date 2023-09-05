import React from 'react'

type Props = {}

function LiIcon({}: Props) {
  return (
    <figure className='absolute -left-4 md:left-0 stroke-sky-800 '>
        <svg width={75} height={75} viewBox='0 0 100 100'>
            <circle cx={75} cy={50} r={20} className='stroke-sky-500 stroke-1 fill-none' />
            <circle cx={75} cy={50} r={20} className=' stroke-[5px] fill- fill-sky-200 animate-pulse' />
            <circle cx={75} cy={50} r={10} className='stroke-1 fill-sky-500 ' />
        </svg>
    </figure>
  )
}

export default LiIcon