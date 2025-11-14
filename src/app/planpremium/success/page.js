import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PlanPremiumSuccess() {
  return (
    <main>
      <Navbar/>

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

      <div className="contenedorplan flex barraprincipal font-sans gap-15 mb-100">
        <div className="bg-[#2C307A] rounded-[5%] w-[400px] h-[200px] mt-[100px] p-[10px]w-full max-w-xl mx-auto px-6 py-10 text-center">
          <p className="text-[#F2F2F2] text-xl">
            Mientras tanto, puedes seguir explorando nuestras funciones o
            regresar al panel principal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <Footer/>
    </main>
  );
}