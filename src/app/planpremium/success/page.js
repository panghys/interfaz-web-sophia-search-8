import Image from "next/image";
import Link from "next/link";

export default function PlanPremiumSuccess() {
  return (
    <main>
      <div className="barraprincipal justify-between items-center font-sans">
        <ul className="flex items-center gap-8 font-sans ml-5">
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
          <div className="flex gap-4 ml-120 font-sans">
            <Link href="/register">
              <button className="boton text-white rounded-lg px-3 py-2 font-sans">
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

      <div className="barraprincipal flex gap-6 justify-between items-center">
        <div className="w-[10%] h-[20%] bg-[#532ece] mt-[35px]"></div>
        <div className="introduccion gap-6 font-sans font-bold tracking-widest mt-5">
          Comprobante enviado
          <div className="font-sans tracking-normal mt-2 text-gray-100 parrafoprincipal font-normal">
            Tu archivo fue recibido. Nuestro equipo verificará el pago y te
            notificará por correo.
          </div>
        </div>
        <div className="w-[10%] h-[20%] bg-[#532ece] mt-[35px]"></div>
      </div>

      <div className="contenedorplan flex barraprincipal font-sans gap-15 mt-10">
        <div className="plan2 w-full max-w-xl mx-auto px-6 py-10 text-center">
          <p className="text-[#F2F2F2] text-xl">
            Mientras tanto, puedes seguir explorando nuestras funciones o
            regresar al panel principal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/home">
              <button className="botonses px-4 py-2 font-sans">
                Ir al inicio
              </button>
            </Link>
            <Link href="/planes">
              <button className="botonsus1 px-4 py-2 font-sans">
                Revisar planes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}