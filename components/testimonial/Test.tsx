'use client';
import React from 'react'
import Button from '../comps/Button'
import { Splide, SplideSlide , SplideTrack } from '@splidejs/react-splide'
import Review from './Review'
import Image from 'next/image';

const Test = () => {
  return (
    <section className='flex flex-col py-[96px] px-[32px] mx-40 justify-item-center self-stretch'>
        <div className='flex flex-row'>
            <h1 className='text-4xl font-semibold text-black leading-[44px]'>Don’t just take our word for it</h1>

            <div className='flex gap-3 ml-auto'>
                <Button type="button" title="Our Customers" color="btn-normal-gray"/>
                <Button type="button" title="Create account" color="btn-purple"/>
            </div>
        </div>

        <div className='flex justify-start'>
            <h2 className='text-xl font-normal leading-[30px] text-gray-500'>Hear from some of our amazing customers who are automating their finances.</h2>
        </div>

        <div className='flex mt-[64px]'>
          <Splide options= {{gap: '1rem'}} aria-label="Reviews">
            <div className="custom-wrapper">
              <SplideSlide>
                <Image src='/Person1.png' alt='person1' height={480} width={360}/>
              </SplideSlide>
              <SplideSlide>
                <Image src='/Person2.png' alt='person2' height={480} width={360}/>
              </SplideSlide>
              <SplideSlide>
                <Image src='/Person3.png' alt='person3' height={480} width={360}/>
              </SplideSlide>
              <SplideTrack> </SplideTrack>

              <div className="splide__arrows" />
            </div>
          </Splide>
        </div>
    </section>
  )
}

export default Test