"use client"
import React, { useState ,useEffect} from 'react';
import { useRouter } from "next/navigation";
import axios from "axios"


function CTaskForm() {
    const addTask=(newData)=>{
        console.log(newData)
        axios.post("https://hospital.somee.com/api/inserttask",newData).then(res=>{
        })}
        
    const router = useRouter()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    endDate: '',
    creationDate: convertDateFormat(),
    modificationDate: convertDateFormat(),
    status: 'AC',
    statusTask: 'AC',
    idEmployee: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    addTask(formData);
    router.push("/tarea")
    router.refresh()

    setFormData({
      title: '',
      description: '',
      endDate: '',
      creationDate: convertDateFormat(),
      modificationDate: convertDateFormat(),
      status: 'AC',
      statusTask: 'AC',
      idEmployee: getidPerson(),
    });
  };
  useEffect(()=>{
    const id = getidPerson()
    const dat = { ...formData };
    dat.idEmployee = parseInt(id, 10)
    setFormData(dat)
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
            Agregar Tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default CTaskForm;


function getidPerson(){
    const id = localStorage.getItem("idemployee0000");
    return parseInt(id, 10)
  }
  function convertDateFormat() {
    const fechaHoraActual = new Date();
    return fechaHoraActual.toISOString();
  }
  