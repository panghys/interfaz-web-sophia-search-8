import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="h-[100px] w-full flex flex-row justify-center flex-nowrap items-center content-center justify-between items-center font-sans"> 
      <ul className="flex items-center align-center gap-8 font-sans ml-5">  
        <Link href="/home">
          <Image
            src="/logo.png"
            alt="logo sophia search"
            width={300}
            height={300}
            priority
          />
        </Link>

        <Link href="/catalogo">
          <button className="botonses px-2 py-2 font-sans">Catálogo</button>
        </Link>

        <Link href="/planes">
          <button className="botonses px-2 py-2 font-sans">Planes</button>
        </Link>

        <div className="flex align-center gap-4 items-left ml-120 font-sans">
          <Link href="/register">
            <button className="bg-[#532ece] hover:bg-[#371e87] text-white px-4 py-2 rounded-lg text-white rounded-lg px-3 py-2 font-sans">
              Registrarse
            </button>
          </Link>

          <Link href="/login">
            <button className="botonses px-2 py-2 font-sans">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
}