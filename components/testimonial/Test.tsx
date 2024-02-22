'use client';
import React from 'react'
import Button from '../comps/Button'
import { Splide, SplideSlide , SplideTrack } from '@splidejs/react-splide'
import Review from './Review'

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

        <div className='flex justify-center'>
          <Review picture='' review='' name='Alisa Hester' text='PM, Hourglass' supporttext='Web Design Agency'/>
        </div>
    </section>
  )
}

export default Test