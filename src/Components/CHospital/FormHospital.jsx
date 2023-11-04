"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function FormHospital() {
  const router =useRouter()
  const [formData, setFormData] = useState({
    nameHospital: '',
    latitude: '',
    longitude: '',
    description: '',
    address: '',
    status: 'AC',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://hospital.somee.com/api/inserthospital",formData).then(res=>{
      setFormData({
        nameHospital: '',
        latitude: '',
        longitude: '',
        description: '',
        address: '',
        status: 'AC',
      })
      router.push("/hospital")
      router.refresh()
    }).catch(err=>{
        console.err(err)
    })
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crear Hospital</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nameHospital" className="block text-sm font-medium text-white">Nombre del Hospital:</label>
          <input
            type="text"
            id="nameHospital"
            name="nameHospital"
            value={formData.nameHospital}
            onChange={handleInputChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="latitude" className="block text-sm font-medium text-white">Latitud:</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="longitude" className="block text-sm font-medium text-white">Longitud:</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-mediumtext-white text-white">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full bg-white text-black border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Crear Hospital</button>
        </div>
      </form>
    </div>
  );
}

export default FormHospital;
