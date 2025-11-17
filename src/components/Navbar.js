import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo sophia search"
              width={250}
              height={70}
              className="h-auto"
              priority
            />
          </Link>

          <Link href="/catalogo">
            <button className="botonses px-2 py-2 font-bold">
              Catálogo
            </button>
          </Link>

          <Link href="/planes">
            <button className="botonses px-2 py-2 font-bold">
              Planes
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/register">
            <button className="bg-[#532ece] hover:bg-[#371e87] text-white px-5 py-3 rounded-full font-bold">
              Registrarse
            </button>
          </Link>

          <Link href="/login">
            <button className="botonses px-2 py-2 font-bold">
              Iniciar sesión
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}
