"use client"
import { useRouter } from "next/navigation"
export default function ButtonH({id}) {
    const router = useRouter()
  return (
    <button
    onClick={()=>{ router.push("/hospital/"+id)}}
    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
  >
    Ver Info
  </button>
  )
}
