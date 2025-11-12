import Image from "next/image";
import Link from "next/link";

export default function PlanPremium() {
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
        <div className="deco"></div>
        <div className="introduccion gap-6 font-sans font-bold tracking-widest mt-5">
          Suscripción Sophia Premium
          <div className="font-sans tracking-normal mt-2 text-gray-100 parrafoprincipal font-normal">
            Completa el proceso y sube tu comprobante para activar el plan.
          </div>
        </div>
        <div className="deco"></div>
      </div>

      <div className="contenedorplan flex barraprincipal font-sans gap-15 mt-10">
        <div className="plan2 w-full">
          <div className="font-sans font-bold gap-2 px-6 py-6 text-[#F2F2F2] text-4xl">
            Premium
            <div className="font-sans font-normal text-[#F2F2F2] text-2xl py-4">
              <p>$9999/mes</p>
              <ul className="mt-5 text-lg text-[#F2F2F2]">
                <li className="py-2">✔️ Noticias ilimitadas</li>
                <li className="py-2">✔️ Colecciones ilimitadas</li>
                <li className="py-2">✔️ Fuentes nacionales e internacionales</li>
                <li className="py-2">✔️ Asistente IA</li>
                <li className="py-2">✔️ Exportación de datos en CSV</li>
                <li className="py-2">✔️ Filtros avanzados con IA</li>
                <li className="py-2">✔️ Soporte prioritario</li>
                <div className="linea"></div>
                <li className="py-2 text-sm">
                  ℹ️ Plan anual: 99999 (pago único)
                </li>
              </ul>
            </div>
          </div>

          <form className="px-6 pb-8 space-y-6">
            <div>
              <label
                htmlFor="proof-upload"
                className="block text-sm font-semibold uppercase tracking-widest text-[#F2F2F2]"
              >
                Comprobante de pago (PNG, JPG o PDF)
              </label>
              <input
                id="proof-upload"
                type="file"
                accept="image/png,image/jpeg,application/pdf"
                className="mt-3 w-full cursor-pointer rounded-lg border border-dashed border-[#F2F2F2]/60 bg-[#241A44] px-4 py-4 text-sm text-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#FF5C8A]"
              />
              <p className="mt-2 text-xs text-[#F2F2F2]/60">
                El archivo será revisado manualmente; recibirás confirmación por
                correo.
              </p>
            </div>

            <button
              type="submit"
              className="botonsus1 text-lg mt-4 px-3 py-2 w-full"
            >
              Enviar comprobante
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}