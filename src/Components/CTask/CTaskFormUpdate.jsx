"use client"
import {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function CTaskFormUpdate({id}) {

    const router = useRouter();
    const today = new Date().toLocaleDateString();
    const [formData, setFormData] = useState({
        idTask: id,
        title: "",
        description: "",
        endDate: "",
        modificationDate: "",
        statusTask: ""
      });
      const handleSubmit=((e)=>{
        e.preventDefault();
        const dato = formData
        dato.modificationDate = convertDateFormat(today)
        axios.put("https://hospital.somee.com/api/updatetask",formData).then(res=>{
            router.refresh()
            router.push("/tarea")
        })
        setFormData({
            idTask: id,
            title: "",
            description: "",
            endDate: "",
            modificationDate: "",
            statusTask: ""
          })
      })
      const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });

      }

      useEffect(()=>{
        axios.get("https://hospital.somee.com/api/task/"+id).then(({data})=>{
            setFormData(
                {
                    idTask: id,
                    title: data.title,
                    description: data.description,
                    endDate: data.endDate,
                    modificationDate: data.modificationDate,
                    statusTask: data.statusTask
                }
            )
        }).catch(err=>{
            return null
        })
      },[])
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Formulario de Tarea</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
            />

        </div>
        <div>
          <label className="block text-sm font-medium text-white">Descripción:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"

          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Estado Tarea:</label>
          <input
            type="text"
            name="statusTask"
            value={formData.statusTask}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"

          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Fecha de Finalización:</label>
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  )
}
function getidPerson(){
    const id = localStorage.getItem("idemployee0000");
    return parseInt(id, 10)
  }
  function convertDateFormat(originalDate) {
    const dateParts = originalDate.split('/');
    const newDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  }
  