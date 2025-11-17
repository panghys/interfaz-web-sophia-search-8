"use client";

import { useState } from "react";

export default function TestApi(){

    const [result,setResult] = useState(null);

    async function probarConexion(){
        try{
            const res = await fetch("http://172.105.21.15:3000/api/subscriptions");
            const data = await res.json();
            setResult(JSON.stringify(data,null,2));
        } catch (error){
            setResult("Error: " + error.message);
        }
    }

    return (
        <div className="p-10 text-white text-center">
            <button onClick={probarConexion} className="bg-blue-600 px-4 py-4 rounded">
                Probar
            </button>

        {result && (
            <pre className="mt-4 p-4 bg-gray-900 text-green-400 whitespace-pre-wrap">
                {result}
            </pre>
      )}
        </div>

    )
}