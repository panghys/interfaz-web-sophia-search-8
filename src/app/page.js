import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <div className="barraprincipal justify-between items-center"> 
      <ul className="flex items-center align-center gap-8 ">  
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
          <button className="botonses px-2 py-2">Catálogo</button>
          </Link>
        <Link href="/planes">
          <button className="botonses px-2 py-2">Planes</button>
          </Link>
      <div className="flex align-center gap-4 items-left ml-110">
        <Link href="/register">
        <button className="boton text-white rounded-lg px-3 py-2 ">Registrarse</button></Link>
        <Link href="/login">
        <button className="botonses px-2 py-2">Iniciar sesión</button>
        </Link>
      </div>
      </ul>
    </div> 
    </main>
  );
}
