import Image from 'next/image'
import React, { ReactElement } from 'react'

type CardProps = {
    title: string,
    description : string
    icon : ReactElement
}

const ServicesCard = (props : CardProps) => {
  return (
    <div className='sm:p-10 p-5 bg-slate-50 rounded-xl'>
        <div className='p-4 w-fit mb-5 bg-orange-100 rounded-lg'>{props.icon}</div>
        <h3 className='font-semibold text-2xl'>{props.title}</h3>
        <p className='text-sm mt-5'>{props.description}</p>
    </div>
  )
}

export default ServicesCard