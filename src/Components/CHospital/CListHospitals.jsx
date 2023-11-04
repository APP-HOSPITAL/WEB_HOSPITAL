import React from 'react'
import ButtonH from './ButtonH'

export default function CListHospitals({dates}) {
  return (
    <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Nombre del Hospital</th>
              <th className="px-4 py-2">Latitud</th>
              <th className="px-4 py-2">Longitud</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Dirección</th>
              <th className="px-4 py-2">Fecha de Creación</th>
              <th className="px-4 py-2">Fecha de Modificación</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {dates.map((hospital) => (
              <tr key={hospital.idHospital}>
                <td className="border px-4 py-2">{hospital.nameHospital}</td>
                <td className="border px-4 py-2">{hospital.latitude}</td>
                <td className="border px-4 py-2">{hospital.longitude}</td>
                <td className="border px-4 py-2">{hospital.description}</td>
                <td className="border px-4 py-2">{hospital.address}</td>
                <td className="border px-4 py-2">{hospital.creationDate}</td>
                <td className="border px-4 py-2">{hospital.modificationDate}</td>
                <td className="border px-4 py-2">
            
                <ButtonH id={hospital.idHospital}/>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}
