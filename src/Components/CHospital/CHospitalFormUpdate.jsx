"use client"
import {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function CHospitalFormUpdate({id}) {
    const router = useRouter();
    const today = new Date().toLocaleDateString();
    const [formData, setFormData] = useState({
      idHospital: id,
      nameHospital: '',
      latitude: '',
      longitude: '',
      description: '',
      address: '',
      creationDate: '',
      modificationDate: '',
      status: '',
    });
      const handleSubmit=((e)=>{
        e.preventDefault();
        setFormData({
          idHospital: id,
          nameHospital: '',
          latitude: '',
          longitude: '',
          description: '',
          address: '',
          creationDate: '',
          modificationDate: '',
          status: '',
        })
      })
      const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });

      }

      useEffect(() => {
        axios
          .get(`https://hospital.somee.com/api/hospital/${id}`)
          .then((response) => {
            const data = response.data;
    
            setFormData({
              idHospital: data.idHospital,
              nameHospital: data.nameHospital,
              latitude: data.latitude,
              longitude: data.longitude,
              description: data.description,
              address: data.address,
              creationDate: data.creationDate,
              modificationDate: data.modificationDate,
              status: data.status,
            });
          })
          .catch((error) => {
            console.error('Error fetching hospital data:', error);
          });
      }, []);
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Formulario de Hospital</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">Nombre del Hospital:</label>
          <input
          readOnly
            type="text"
            name="nameHospital"
            value={formData.nameHospital}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Latitud:</label>
          <input
          readOnly
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Longitud:</label>
          <input
          readOnly
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Descripción:</label>
          <input
          readOnly
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Dirección:</label>
          <input
          readOnly
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Fecha de Creación:</label>
          <input
          readOnly
            type="text"
            name="creationDate"
            value={formData.creationDate}
            onChange={handleChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        
        {/* <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Actualizar
          </button>
        </div> */}
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
  