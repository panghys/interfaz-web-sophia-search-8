'use client';
import Navbar from "@/components/Navbar";
import Planes from "@/components/Planes";
import Footer from "@/components/Footer";




export default function Suscripciones() {
  return (
    <main>
      <Navbar/>
      <div className="text-center mt-10 mb-6">
      <h2 className="relative inline-block text-4xl font-bold tracking-wide text-white">
        <span className="bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent">
          Planes de Suscripción
        </span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent rounded-full"></div>
      </h2>
      <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto">
        Elige el plan que mejor se adapte a tus necesidades
      </p>
    </div>
    <Planes/>
    <div className="mb-50"></div>
    <Footer/>
      </main>
  );
}
