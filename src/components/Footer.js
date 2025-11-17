'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
    <div className="barrafinal mt-50">
      <div className="barrafinal2">
          <Link href="/home" className="py-2 px-5 mt-1">
            <Image
            src="/logo2.png"
            alt="logo sophia search"
            width={400}
            height={400}
            priority
          />

        </Link>
        <div className="ml-30 flex">
          <Link href="insta" className="px-3">
            <Image
              src="/insta.png"
              alt="insta"
              width={30}
              height={30}
              priority
              />
          </Link>
          <Link href="face" className="px-3">
            <Image
              src="/facebook.png"
              alt="facebook"
              width={30}
              height={30}
              priority
              />
            </Link>
          <Link href="linkedin" className="px-3">
            <Image
              src="/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
              priority
              />
            </Link>
          <Link href="youtube" className="px-3">
            <Image
              src="/youtube.png"
              alt="insta"
              width={30}
              height={30}
              priority
              />
            </Link>
        </div>
        </div>
        <div className="barrafinal3 ml-175 px-5">
          <div className="text-sans text-lg mt-4 px-10">
            Principal
            <ul className="px-3 text-gray-700 text-sm py-3">
              <Link href="/catalogo"><li className="py-2 botonabajo">Catálogo</li></Link>
              <Link href="/planes"><li className="py-2 botonabajo">Planes</li></Link>
              <Link href="/contacto"><li className="py-2 botonabajo">Contacto</li></Link>
            </ul>
          </div>
          <div className="text-sans text-lg mt-4">
            Otros
            <ul className="px-3 text-gray-700 text-sm py-3">
              <Link href="/tyc"><li className="py-2 botonabajo">Términos y condiciones</li></Link>
              <Link href="/privacidad"><li className="py-2 botonabajo">Política de privacidad</li></Link>
              <Link href="/admin"><li className="py-2 botonabajo">Interfaz de administrador</li></Link>
            </ul>
            
          </div>
        </div>
      
      </div>
    )
}