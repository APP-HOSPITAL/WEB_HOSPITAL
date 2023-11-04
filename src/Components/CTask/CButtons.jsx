"use client"
import { useRouter } from 'next/navigation'
import axios from 'axios'
export default function CButtons({id}) {
    const router = useRouter()
    return (
      <>
         <button
         onClick={()=>{axios.put("https://hospital.somee.com/api/updatestatetask",{
            "idTask": id,
            "stateUpdate": "DE" 
          }).then(res=>{
            router.push("/tarea")
            router.refresh()
          })}} 
        className="bg-red-500 text-white px-2 py-1 mr-2 rounded hover:bg-red-600"
        >
        Eliminar
        </button>
        <button
        onClick={()=>{
            router.push("/tarea/"+id)
        }}
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
        Editar
        </button>
      </>
    )
}
