import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <div className="barraprincipal justify-between items-center font-sans"> 
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
        <button className="boton text-white rounded-lg px-3 py-2 font-sans">Registrarse</button></Link>
        <Link href="/login">
        <button className="botonses px-2 py-2 font-sans">Iniciar sesión</button>
        </Link>
      </div>
      </ul>
    </div>
    <div className="barraprincipal flex gap-6 justify-between items-center align-center">
      <div className="deco"></div>
      <div className="introduccion gap-6 font-sans font-bold tracking-widest mt-5"> Planes de suscripción
        <div className="font-sans tracking-normal mt-2 text-gray-600 parrafoprincipal gap-6 font-normal"> Elige el plan que se adapte a tus necesidades</div>
        </div>
      <div className="deco"></div>
    </div>
    <div className="contenedorplan flex barraprincipal font-sans gap-15 mt-10">
      <div className="plan">
        <div className="font-sans font-bold gap-2 px-3 py-3 text-[#532ECE] text-4xl "> Gratuito 
          <div className="font-sans font-normal text-gray-700 text-2xl py-2 px-3">
          <p>$0/mes</p>
          <Link href="/planfree">
          <button className="botonsus text-lg mt-4 px-3 py-2 w-fit">
            Obtener Sophia gratuito
          </button>
          </Link>
          <ul className="mt-5 text-lg">
            <li className="py-2">✔️ Límite de noticias: 100/mes</li>
            <li className="py-2">✔️ Capacidad de colecciones: 250</li>
            <li className="py-2">✔️ Fuentes nacionales</li>
            <li className="py-2">✔️ Soporte básico</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="plan2">
          <div className="font-sans font-bold gap-2 px-3 py-3 text-[#F2F2F2] text-4xl "> Premium 
            <div className="font-sans font-normal text-[#F2F2F2] text-2xl py-2 px-3">
              <p>$9999/mes</p>
              <Link href="/planpremium">
                <button className="botonsus1 text-lg mt-4 px-3 py-2 w-fit">
                  Obtener Sophia premium
                </button>
              </Link>
              <ul className="mt-5 text-lg text-[#F2F2F2]">
                <li className="py-2">✔️ Sin límite de noticias</li>
                <li className="py-2">✔️ Colecciones ilimitadas</li>
                <li className="py-2">✔️ Fuentes nacionales e internacionales</li>
                <li className="py-2">✔️ Asistente IA</li>
                <li className="py-2">✔️ Exportación de datos en CSV</li>
                <li className="py-2">✔️ Filtros avanzados con IA</li>
                <li className="py-2">✔️ Soporte prioritario</li>
                <div className="linea"></div>
                <li className="py-2 align-center items-center text-sm"> ℹ️ Plan anual: 99999</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="barrafinal mt-250">
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
              src="/insta.png"
              alt="insta"
              width={30}
              height={30}
              priority
              />
            </Link>
          <Link href="linkedin" className="px-3">
            <Image
              src="/insta.png"
              alt="insta"
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
              <Link href="/planes"><li className="py-2 botonabajo">Política de privacidad</li></Link>
              <Link href="/contacto"><li className="py-2 botonabajo">Interfaz de administrador</li></Link>
            </ul>
            
          </div>
        </div>
      
      </div>
      </main>
  );
}
