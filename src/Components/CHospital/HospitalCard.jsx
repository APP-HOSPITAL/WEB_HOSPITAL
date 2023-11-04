import React,{useEffect, useState} from 'react';
import axios from 'axios';

function TablaHospital() {

  const [dates,setDates] = useState([])

    useEffect(()=>{
        axios.get("https://hospital.somee.com/api/listhospital").then(res=>{
            setDates(res.data)
            console.log(res.data)
        })
    },[])
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tabla de Hospitales</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre del Hospital</th>
              <th className="px-4 py-2">Latitud</th>
              <th className="px-4 py-2">Longitud</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Dirección</th>
              <th className="px-4 py-2">Fecha de Creación</th>
              <th className="px-4 py-2">Fecha de Modificación</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {dates.map((hospital) => (
              <tr key={hospital.idHospital}>
                <td className="border px-4 py-2">{hospital.idHospital}</td>
                <td className="border px-4 py-2">{hospital.nameHospital}</td>
                <td className="border px-4 py-2">{hospital.latitude}</td>
                <td className="border px-4 py-2">{hospital.longitude}</td>
                <td className="border px-4 py-2">{hospital.description}</td>
                <td className="border px-4 py-2">{hospital.address}</td>
                <td className="border px-4 py-2">{hospital.creationDate}</td>
                <td className="border px-4 py-2">{hospital.modificationDate}</td>
                <td className="border px-4 py-2">{hospital.status}</td>
                <td className="border px-4 py-2">
            
                <button
                  onClick={() => handleEdit(tarea.idTask)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Editar
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaHospital;
