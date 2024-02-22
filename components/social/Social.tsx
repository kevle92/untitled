import React from 'react'
import Image from 'next/image'

const Social = () => {
  return (
    <section className='flex flex-col pb-[96px] px-[32px] mx-40 justify-item-center self-stretch'>
        <div className='flex flex-col py-[64px] px-[32px] gap-[32px] bg-backgray rounded-2xl'>
            <h1 className='text-xl font-normal leading-8 text-center text-gray-600'>Trusted by 4,000+ companies</h1>
            <div className='flex flex-row gap-6 justify-center'>
                <div className='flex gap-[11.38px]'>
                    <Image src='bolt.svg' alt='bolt' width={44} height={44}/>
                    <Image src='boltlogo.svg' alt='boltlogo' width={113} height={22}/>
                </div>

                <div className='flex gap-[11.38px]'>
                    <Image src='box.svg' alt='box' width={44} height={44}/>
                    <Image src='boxlogo.svg' alt='boxlogo' width={113} height={22}/>
                </div>

                <div className='flex gap-[11.38px]'>
                    <Image src='fea.svg' alt='fea' width={44} height={44}/>
                    <Image src='fealogo.svg' alt='fealogo' width={113} height={22}/>
                </div>

                <div className='flex gap-[11.38px]'>
                    <Image src='sp.svg' alt='sp' width={44} height={44}/>
                    <Image src='splogo.svg' alt='splogo' width={113} height={22}/>
                </div>

                <div className='flex gap-[11.38px]'>
                    <Image src='bank.svg' alt='bank' width={44} height={44}/>
                    <Image src='banklogo.svg' alt='banklogo' width={113} height={22}/>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Social