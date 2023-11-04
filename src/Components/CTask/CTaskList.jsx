import React from 'react'
import CButtons from './CButtons'

export default function CTaskList({dates}) {
  return (
    <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Título</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Fecha de Creación</th>
              <th className="px-4 py-2">Fecha de Finalización</th>
              <th className="px-4 py-2">Estado de la Tarea</th>
              <th className="px-4 py-2">Nombre del Doctor</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            
            {dates && dates.length > 0 ? (
              
              dates.map((tarea) => (
                <tr key={tarea.idTask}>
                  <td className="border px-4 py-2">{tarea.title}</td>
                  <td className="border px-4 py-2">{tarea.description}</td>
                  <td className="border px-4 py-2">{tarea.creationDate}</td>
                  <td className="border px-4 py-2">{tarea.endDate}</td>
                  <td className="border px-4 py-2">{tarea.statusTask}</td>
                  <td className="border px-4 py-2">{tarea.employeeName}</td>
                  <td className="border px-4 py-2">
                   <CButtons id={tarea.idTask}></CButtons>
                  </td>
                </tr>))
            ) : (
              <tr>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">
                ...
                </td>
              </tr>
            )}
  
            
         
          </tbody>
        </table>
  )
}
