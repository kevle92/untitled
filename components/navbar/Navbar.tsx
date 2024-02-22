import Image from "next/image";
import Link from "next/link";
import Button from "../comps/Button";
import Navcomp from "./Navcomp";

const Navbar = () => {
    return (
    <div className="">
        <nav className="flex justify-between items-center max-container padding-container relative z-30 py-10 px-48">

            <Link href="/">
                <Image src="/Logomark.svg" alt="logo" width={32} height={32} />
            </Link>

            <div className="hidden h-full lg:flex ml-3">
                <Link href="" key="" className="text-black font-medium text-lg">
                    Unititled UI
                </Link>
            </div>

            <ul className="hidden h-full gap-12 lg:flex ml-16 mt-1">
                <Navcomp
                    Href="/"
                    Key="home"
                    Label="Home"
                    Down={false}
                    />
                <Navcomp
                    Href="/"
                    Key="products"
                    Label="Products"
                    Down={true}
                    />
                <Navcomp
                    Href="/"
                    Key="resources"
                    Label="Resources"
                    Down={true}
                    />
                <Navcomp
                    Href="/"
                    Key="pricing"
                    Label="Pricing"
                    Down={false}
                    />
            </ul>
            
            <div className="lg:flexCenter ml-auto mr-5">
                <Button 
                    type="button"
                    title="Login"
                    color="btn-white"
                    />
            </div>

            <div className="lg:flexCenter">
                <Button 
                    type="button"
                    title="Sign Up"
                    color="btn-purple"
                    />
        </div>

        </nav>
    </div>
    )
}
export default Navbar