import React from 'react'
import Image from 'next/image'
import ButtonXL from '../comps/ButtonXL'
import Newbtn from './Newbtn'

const Hero = () => {
  return (
    <section className="flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className='flex gap-2 px-20'>
          <div className="px-8 ml-20 relative z-20 flex flex-col xl:w1/2 mr-auto mt-20">
              <Newbtn/>

              <h1 className="leading-[72px] text-6xl font-semibold text-black mr-auto max-w-xl mt-5">Smart business credit cards</h1>

              <p className="mt-6 leading-8 text-xl font-light text-gray-500 mr-23 pt max-w-md">Untitled is a next-gen financial technology company in the process of reinventing banking.</p>

              <div className='flex gap-10 mt-5'> 
                <ButtonXL 
                  type="button"
                  title="Demo"
                  color="btn-normal"
                  play={true}
                  />

                <ButtonXL 
                  type="button"
                  title="Sign Up"
                  color="btn-purple"
                  />
                </div>
          </div>

          <Image src="/Content.svg" alt="cards" className='ml-36' width={650} height={520}></Image>
        </div>
    </section>
  )
}

export default Hero