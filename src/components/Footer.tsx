'use client';

import Image from "next/image";
import Link from "next/link";
import Iconos from "./Iconos";

export default function Footer() {
  return (
    <footer className="barrafinal w-full py-10">
      <div className=" w-full flex flex-col md:flex-column items-center md:items-start justify-between px-8 gap-10">
        <Link href="/home" className="flex justify-start">
          <Image
            src="/logo2.png"
            alt="logo sophia search"
            width={250}
            height={250}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <Iconos/>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center md:justify-end gap-16 px-10">
        <div className="text-sm font-bold">
          Principal
          <ul className="text-gray-700 text-xs py-3">
            <li className="py-2 botonabajo"><Link href="/catalogo">Catálogo</Link></li>
            <li className="py-2 botonabajo"><Link href="/planes">Planes</Link></li>
            <li className="py-2 botonabajo"><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="text-sm font-bold">
          Otros
          <ul className="text-gray-700 text-xs py-3">
            <li className="py-2 botonabajo"><Link href="/tyc">Términos y condiciones</Link></li>
            <li className="py-2 botonabajo"><Link href="/privacidad">Política de privacidad</Link></li>
            <li className="py-2 botonabajo"><Link href="/admin">Interfaz de administrador</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
