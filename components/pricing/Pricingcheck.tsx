import React from 'react'
import Image from 'next/image'

type Pricingcheck =  {
    point: string;
}

const Pricingcheck = ({point} : Pricingcheck) => {
  return (
    <div className='gap-[12px] flex flex-start'>
                <Image src='check-circle.svg' alt='check' width={24} height={24}/>
                <h2 className='text-gray-600 text-base font-normal leading-6'>{point}</h2>
            </div>
  )
}

export default Pricingcheck