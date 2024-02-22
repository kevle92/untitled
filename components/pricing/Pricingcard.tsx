import React from 'react'
import Pricingcheck from './Pricingcheck'

type Pricingcard = {
    plan: string;
    price: string;
    description: string; 
    popular: boolean
}

const Pricingcard = ({plan, price, description, popular} : Pricingcard) => {
  return (
    <div className='flex flex-col border-2 border-gray-200 shadow-lg rounded-lg'>
        <div className='flex flex-col p-[32px]'>
            <div className='flex align-center'>
                <h1 className='flex text-lg text-gray-800 text-start font-medium'>{plan}</h1>
                <h1 className={`text-center text-sm text-purp font-medium bg-backpurp border-2 border-bordpurp rounded-2xl p-1 ${!popular && 'hidden'} ml-auto`}>Popular</h1>
            </div>

            <div className='flex flex-nowrap justify-start gap-[4px] my-4'>
                <h1 className='text-black text-6xl font-semibold tracking-tight'>{price}</h1>
                <h2 className='text-gray-600 text-base font-medium leading-6 mt-auto'>per month</h2>
            </div>

            <div className='text-gray-400 text-base leading-6 mb-8'>{description}</div>

            <button className={`flex gap-3 rounded-lg px-[132px] py-3 border ${'btn-purple'} flex-nowrap border-2 justify-center`} type='button'>
                <label className="font-semibold text-base leading-6 whitespace-nowrap cursor-pointer">Get started</label>
            </button>
        
            <button className={`flex gap-3 rounded-lg px-[18px] py-3 border ${'btn-normal'} flex-nowrap border-2 justify-center mt-3`} type='button'>
                <label className="font-semibold text-base text-gray-600 whitespace-nowrap cursor-pointer">Chat to sales</label>
            </button>
        </div>

        <div className='flex justify-center'>
          <div className='border-b w-full'/>
        </div>

        <div className='flex flex-col p-[32px]'>
            <h1 className='text-base text-black font-semibold leading-6'>FEATURES</h1>
            <h2 className='text-gray-600 text-base font-normal leading-6 mt-[4px]'>Everything in <b>Start</b> plus....</h2>

            <div className='flex flex-col gap-[16px] justify-start mt-[24px]'>
                <Pricingcheck point='Access to basic features'/>
                <Pricingcheck point='Basic reporting and analytics'/>
                <Pricingcheck point='Up to 10 individual users'/>
                <Pricingcheck point='20GB individual data each user'/>
                <Pricingcheck point='Basic chat and email support'/>
            </div>
        </div>

        

    </div>
  )
}

export default Pricingcard