import Link from "next/link";
import { SiInstagram, SiFacebook, SiLinkedin, SiYoutube } from "react-icons/si";


export default function Iconos(){

    return(
    <div className="flex items-center px-20 gap-6 text-[#532ece]">
        <Link href="https://www.instagram.com" target="_blank">
            <SiInstagram size={20} className="hover:text-[#371e87] transition-colors"></SiInstagram>
        </Link>
        <Link href="https://facebook.com" target="_blank">
            <SiFacebook size={20} className="hover:text-[#371e87] transition-colors" />
        </Link>

        <Link href="https://linkedin.com" target="_blank">
            <SiLinkedin size={20} className="hover:text-[#371e87] transition-colors" />
        </Link>

        <Link href="https://youtube.com" target="_blank">
            <SiYoutube size={20} className="hover:text-[#371e87] transition-colors" />
        </Link>
    </div>
    )
}