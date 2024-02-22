import React from 'react'
import Image from 'next/image'
import ButtonXL from '../comps/ButtonXL'

const CTA = () => {
  return (
    <section className='flex flex-col py-[96px] px-[32px] mx-40 justify-item-center self-stretch'>
        <div className='grid grid-cols-2 px-[32px] gap-[64px]'>
            <div className='flex flex-col justify-start align-middle'>
                <h1 className="leading-[72px] text-5xl font-semibold text-black">Get started in 5 minutes</h1>
                <div className='mt-[32px] flex flex-col gap-[20px] pl-[16px] '>
                    <div className='flex flex-row gap-[12px]'>
                        <Image src='check-circle.svg' alt='check' width={28} height={28}/>
                        <h2 className='text-lg font-normal leading-7 text-gray-600'>30-day free trial</h2>
                    </div>
                    
                    <div className='flex flex-row gap-[12px]'>
                        <Image src='check-circle.svg' alt='check' width={28} height={28}/>
                        <h2 className='text-lg font-normal leading-7 text-gray-600'>Peronalized onboarding</h2>
                    </div>

                    <div className='flex flex-row gap-[12px]'>
                        <Image src='check-circle.svg' alt='check' width={28} height={28}/>
                        <h2 className='text-lg font-normal leading-7 text-gray-600'>Access to all features</h2>
                    </div>
                </div>

                <div className='flex flex-row justify-start align-middle mt-[48px] gap-[12px]'>
                    <ButtonXL type='button' title='Learn more' color='btn-normal'/>
                    <ButtonXL type='button' title='Get started' color='btn-purple'/>
                </div>
            </div>

            <Image className='border-4 border-black rounded-2xl' src='/screen.png' alt='screen' width={2880} height={1920}/>

        </div>
    </section>
  )
}

export default CTA