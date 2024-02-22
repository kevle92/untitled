import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Navprops = {
    Href: string;
    Key: string;
    Label: string;
    Down: boolean
  }

const Navcomp = ({Href, Key, Label, Down}: Navprops) => {
  return (
    <Link href={Href} key={Key} className="text-gray-700 flex cursor-pointer pb-1.5 transition-all hover:font-bold">
        {Label} <Image className={`${!Down && 'hidden'}`} src="/chevron-down.svg" width={20} height={20} alt="down"></Image>
    </Link>
  )
}

export default Navcomp