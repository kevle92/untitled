import React from 'react'
import Image from 'next/image'

type Featurecomp = {
    title: string;
    description: string;
    pic: string;
}

const Featurecomp = ({title, description, pic} : Featurecomp) => {
  return (
    <div className='flex-wrap'>
        <div className='flex justify-center rounded-xl px-1 py-2'>
          <div className='border-2 border-gray-200 p-2.5 rounded-xl'>
            <Image className="flex rounded-md " src={pic} alt='pic' width={24} height={24}/>
          </div>
        </div>
        <h1 className='text-black font-medium text-xl text-center'>{title}</h1> 
        <p className='text-gray-500 font-normal text-center mt-3'>{description}</p>
    </div>
  )
}

export default Featurecomp