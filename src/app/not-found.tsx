import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center text-2xl min-h-screen gap-4">
            <div className="text-center text-gray-200">
                La página que buscas no existe.
            </div>
            <div>
                <Link href="/home">
                    <button className="botonses px-2 py-2 font-sans"> 
                        Volver al inicio 
                    </button>
                </Link>
            </div>
        </div>
    )
}
