// PersonList.js
import React from 'react';

function PersonList({ people }) {
  return (
    <ul className="bg-gray-100 p-4 rounded-lg">
      {people.map((person) => (
        <li key={person.idStudent} className="text-blue-600">
        <h2 className="text-lg font-semibold">{person.name}</h2>   
            <p>ID del Estudiante: {person.idStudent}</p>
            <p>Universidad: {person.nameUniversity}</p>
            <p>Semestre: {person.semester}</p>
            <p>Tarjeta de Estudiante: {person.studentCard}</p>
            <p>Ubicación: Latitud {person.latitude}, Longitud {person.longitude}</p>
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
