import Image from "next/image";
import bg from "@/public/Background pattern.svg"

const Background = () => {
    return (
        <Image src={bg} className="px-6" alt="bg" fill sizes="100vw"/>
    )
}

export default Background