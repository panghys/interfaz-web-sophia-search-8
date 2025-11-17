import Image from "next/image";
import Link from "next/link";

{/* Los comentarios que puse acá es lo que vamos a hacer cuando tengamos la API ya conectada 
  cuidado porque para que siga funcionando cloné la cosa de Iniciar sesión*/}
{/* Lo de la API es para que muestre Mi cuenta y Cerrar sesión cuando se tenga la sesión iniciada y registrarse/ iniciar sesión cuando no*/}

export default async function Navbar() {

  {/*const res = await fetch("ellinkdelaapi.com/api/auth/session", {
    cache: "no-store",
    credentials: "include",
  });

  const session = await res.json();
  const logged = session.logged;
  */}

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
              <button className="bg-[#532ece] hover:bg-[#371e87] text-white px-4 py-2 rounded-lg font-sans">
                Registrarse
              </button>
            </Link>

            <Link href="/login">
              <button className="botonses px-2 py-2 font-sans">
                Iniciar sesión
              </button>
            </Link>
          </div>

        {/*{logged === false ? (
          <div className="flex align-center gap-4 items-left ml-120 font-sans">
            <Link href="/register">
              <button className="bg-[#532ece] hover:bg-[#371e87] text-white px-4 py-2 rounded-lg font-sans">
                Registrarse
              </button>
            </Link>

            <Link href="/login">
              <button className="botonses px-2 py-2 font-sans">
                Iniciar sesión
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex align-center gap-4 items-left ml-120 font-sans">
            <Link href="/account">
              <button className="bg-[#532ece] hover:bg-[#371e87] text-white px-4 py-2 rounded-lg font-sans">
                Mi cuenta
              </button>
            </Link>

            <Link href="/logout">
              <button className="botonses px-2 py-2 font-sans">
                Cerrar sesión
              </button>
            </Link>
          </div>
        )}
          */}
      </ul>
    </div>
  );
}
