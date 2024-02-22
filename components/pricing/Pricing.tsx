import React from 'react'
import Pricingcard from './Pricingcard'

const Pricing = () => {
  return (
    <section className='flex justify-center bg-white my-24'>
        <div className='flex-col justify-center'>
            <h1 className='text-purple-second font-medium text-center'>Pricing</h1>

            <h1 className='font-semibold text-center text-black text-4xl tracking-wide mt-7'>Plans that fit your scale</h1>

            <p className='font-normal text-center text-gray-500 mt-10 text-xl'>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>

            <div className='flex self-stretch px-8 justify-center gap-8 mt-16'>
                <Pricingcard plan='Basic Plan' price='$10' description='Basic features for up to 10 users.' popular={true}/>
                <Pricingcard plan='Business plan' price='$20' description='Advanced features and reporting.' popular={false} />
                <Pricingcard plan='Enterprise plan' price='$40' description='Unlimited features.' popular={false}/>
            </div>
        </div>
    </section>
  )
}

export default Pricing