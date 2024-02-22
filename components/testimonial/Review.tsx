import React from 'react'
import Image from 'next/image'

type Review = {
    picture : string;
    review : string;
    name : string;
    text : string;
    supporttext : string;
}

const Review = ({picture, review, name, text, supporttext} : Review) => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col align-bottom justify-center py-6 px-5 backdrop-blur-md'>
            <h2 className='text-white font-semibold leading-9 text-[20px]'>{review}</h2>

            <div className='flex flex-row justify-start backdrop-blur-md'>
                <Image src='Star.svg' alt='star' width={20} height={20}/>
                <Image src='Star.svg' alt='star' width={20} height={20}/>
                <Image src='Star.svg' alt='star' width={20} height={20}/>
                <Image src='Star.svg' alt='star' width={20} height={20}/>
                <Image src='Star.svg' alt='star' width={20} height={20}/>
            </div>

            <h1 className='text-white font-semibold leading-9 text-3xl'>{name}</h1>
            <h2 className='text-white font-semibold leading-9 text-lg'>{text}</h2>
            <h3 className='text-white font-semibold leading-9 text-base'>{supporttext}</h3>
        </div>
      </div>
  )
}

export default Review