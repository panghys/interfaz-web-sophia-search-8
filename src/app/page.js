'use client';

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";


export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);
    const handleAcceptTerms = () => setTermsAccepted(true);


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
         
          <button onClick={openPopup} className="botonsus text-lg mt-4 px-3 py-2 w-fit">
                Obtener Sophia gratuito
              </button>
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
             
              <button onClick={openPopup} className="botonsus1 text-lg mt-4 px-3 py-2 w-fit"> 
                Obtener Sophia premium
              </button>
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


       {/* Popup de términos y condiciones */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={closePopup} className="close-button">X</button>
            <h2 className="popup-title">Términos y condiciones</h2>
            <div className="terms-content">
              <p>1. Aceptación de los términos <br />
                Al utilizar o descargar contenido a través del sistema de noticias, el usuario acepta cumplir con estos Términos y Condiciones. Si el usuario no está de acuerdo, deberá abstenerse de usar la plataforma. <br /><br />
                2. Descripción del servicio <br />
                El sistema permite acceder, visualizar y descargar noticias provenientes de distintos medios digitales. La aplicación actúa como intermediario tecnológico y no almacena ni modifica el contenido original de las fuentes externas. <br /><br />
                3. Propiedad intelectual <br />
                Todo el contenido descargado pertenece a sus respectivos autores o medios de comunicación. El sistema no reclama propiedad ni derechos sobre dicho contenido, y su uso queda sujeto a las políticas de cada fuente. <br /><br />
                4. Uso permitido <br />
                El usuario podrá utilizar el sistema solo para fines personales, académicos o informativos. Está prohibido el uso comercial, la redistribución masiva o la modificación del contenido descargado. <br /><br />
                5. Fuentes con restricción o suscripción <br />
                Si una fuente de noticias requiere suscripción, autenticación o pago, el usuario debe poseer una cuenta válida en ese medio para acceder al contenido. El sistema no elude, omite ni reemplaza los mecanismos de acceso restringido de los sitios de origen. El usuario no podrá descargar noticias de fuentes de pago si no cuenta con los permisos o suscripciones necesarias. <br /><br />
                6. Responsabilidad del usuario <br />
                El usuario es el único responsable del uso que haga de la información descargada, así como de verificar la validez de los derechos de autor y condiciones de uso de cada medio. El equipo desarrollador no se hace responsable por el uso indebido o la distribución no autorizada del contenido. <br /><br />
                7. Enlaces externos <br />
                Los enlaces y recursos externos pertenecen a terceros. El sistema no controla ni garantiza la disponibilidad, exactitud o legalidad del contenido enlazado. <br /><br />
                8. Modificaciones de los términos <br />
                El equipo de desarrollo podrá modificar estos términos en cualquier momento, notificando los cambios a los usuarios dentro del sistema o en la documentación oficial del proyecto. <br /><br />
                9. Limitación de responsabilidad <br />
                El sistema se proporciona “tal cual” y sin garantías. El equipo desarrollador no será responsable de daños directos o indirectos derivados del uso, descarga o acceso a contenido externo.
              </p>
            </div>
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              Aceptar términos
            </label>
            <button
              onClick={handleAcceptTerms}
              disabled={!termsAccepted}
              className="continue-button"
            >
              Continuar
            </button>
          </div>
        </div>
      )}


      
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
