import Image from "next/image";

type ButtonXLProps = {
  type: 'button' | 'submit';
  title: string;
  color: string;
  play?: boolean;
}

const ButtonXL = ({ type, title, color, play }: ButtonXLProps) => {
  return (
    <button className={`flex gap-3 rounded-lg px-6 py-3 border ${color} flex-nowrap border-2 justify-center align-middle`} type={type} >
        <Image src="/Buttons/play-circle.svg" className={`${!play && 'hidden'} align-middle`} alt='play' width={23} height={23}/>
        <label className="font-semibold text-lg whitespace-nowrap cursor-pointer align-middle">{title}</label>
    </button>
  )
}

export default ButtonXL