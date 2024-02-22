import React from 'react'
import Featurecomp from './Featurecomp'

const Features = () => {
  return (
    <section className='flex bg-white justify-center mt-32'>
      <div className='flex-col justify-center items-center'>
        <h1 className='text-purple-second font-medium text-center'>Features</h1>

        <h1 className='font-semibold text-center text-black text-4xl tracking-wide mt-7'>All you need to run your finances effectively</h1>

        <p className='font-normal text-center text-gray-500 mt-10 text-xl'>Open a full-featured account in with virtual cards in less than 5 minutes.</p>

        <div className='grid grid-cols-3 gap-16 px-48 mt-10'>
          <Featurecomp title='Share team inboxes' description='Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.' pic='message-chat-circle.svg'/>          
          <Featurecomp title='Deliver instant answers' description='An all-in-one customer service platform that helps you balance everything your customers need to be happy.' pic='zap.svg'/>
          <Featurecomp title='Manage your team with reports' description='Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.' pic='chart-breakout-square.svg'/>
          <Featurecomp title='Connect with customers' description='Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.' pic='message-smile-circle.svg'/>
          <Featurecomp title='Connect the tools you already use' description='Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.' pic='command.svg'/>
          <Featurecomp title='Our people make the difference' description='We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.' pic='message-heart-circle.svg'/>
        </div>

        <div className='flex justify-center'>
          <div className='border-b mt-20 w-5/6'/>
        </div>
      </div>
    </section>
  )
}

export default Features