import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  color: string;
  full?: boolean;
}

const Button = ({ type, title, color, full }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-lg px-4 py-2 border ${color} ${full && 'w-full'}`}
      type={type}
    >
      <label className="bold-1 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button