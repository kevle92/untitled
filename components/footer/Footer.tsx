import React from 'react'
import ButtonXL from '../comps/ButtonXL'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='flex flex-col pt-[64px] pb-[48px] justify-center self-stretch bg-footerback'>
      <div className='px-[104px]'>
        <h1 className='text-3xl font-semibold leading-9 text-center text-white'>No long-term contracts. No catches. Simple.</h1>
        <h2 className='mt-[16px] text-lg font-normal leading-8 text-[#94969C] text-center'>Start your 30-day free trial. Cancel anytime.</h2>

        <div className='flex flex-row justify-center gap-[12px] mt-[48px] mb-[64px]'>
          <ButtonXL type='button' title='View demo' color='btn-normal-dark' play={true}/>
          <ButtonXL type='button' title='Get started' color='btn-purple'/>
        </div>

        <div className='flex justify-center'>
          <div className='border-b border-[#1F242F] w-[95%]'/>
        </div>

        <div className='flex mt-[64px] flex-col'>
          <div className='flex align-middle'>
            <Image src='Logomark.svg' alt='logo' width={24} height={24}/>
            <Image className='ml-[16px]' src='Logotype.svg' alt='logotype' width={100} height={32}/>
            <h2 className='flex justify-end font-medium text-base leading-6 text-[#CECFD2] align-text-top ml-auto'>Get the app</h2>
          </div>

          <div className='flex justify-end align-middle'>
            <Image src='applestore.svg' alt='apple' width={135} height={40}/>
          </div>

          <div className='flex align-middle mt-[16px]'>
            <h2 className='text-base font-normal leading-6 text-[#94969C] max-w-96'>Design amazing digital experiences that create more happy in the world.</h2>
            <Image className='ml-auto' src='googlestore.svg' alt='google' width={135} height={40}/>
          </div>

          <div className='flex align-middle mt-[32px] justify-start gap-[8px] self-stretch'>
            <h3 className='text-base font-semibold text-[#94969C] leading-6'>Overview</h3>
            <h3 className='text-base font-semibold text-[#94969C] leading-6'>Features</h3>
            <h3 className='text-base font-semibold text-[#94969C] leading-6'>Pricing</h3>
            <h3 className='text-base font-semibold text-[#94969C] leading-6'>Careers</h3>
            <h3 className='text-base font-semibold text-[#94969C] leading-6'>Help</h3>
            <h3 className='text-base font-semibold text-[#94969C] leading-6'>Privacy</h3>
          </div>
        </div>

        <div className='flex justify-center mt-[64px]'>
          <div className='border-b border-[#1F242F] w-[95%]'/>
        </div>

        <div className='mt-[32px] flex'>
          <h2 className='text-base font-normal leading-6 text-[#94969C] max-w-96'>© 2077 Untitled UI. All rights reserved.</h2>

          <div className='flex gap-[24px] ml-auto'>
            <Image src='x.svg' alt='x' width={24} height={24}/>
            <Image src='linked.svg' alt='linked' width={24} height={24}/>
            <Image src='face.svg' alt='face' width={24} height={24}/>
            <Image src='git.svg' alt='git' width={24} height={24}/>
            <Image src='p.svg' alt='p' width={24} height={24}/>
            <Image src='social.svg' alt='social' width={24} height={24}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer