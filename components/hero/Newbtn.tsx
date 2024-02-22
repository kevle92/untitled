import React from 'react'
import Image from 'next/image'

const Newbtn = () => {
  return (
    <button className={`flex items-center mr-auto shadow-sm gap-1 rounded-xl p-[2px] border ${"btn-normal"} flex-nowrap border-2`} type={'button'}>
        <div className={`flex items-center shadow-sm gap-1 rounded-lg p-[2px] border ${"btn-normal"} flex-nowrap border-2`}>
            <Image src="_Dot.svg" alt='play' width={12} height={12}/>
            <label className="text-sm whitespace-nowrap cursor-pointer">New!</label>
        </div>

        <label className="text-sm whitespace-nowrap cursor-pointer ml-2">Download the new iOS app</label>
        <Image src="/arrow-right.svg" alt='arrow' width={16} height={12}/>
    </button>
  )
}

export default Newbtn