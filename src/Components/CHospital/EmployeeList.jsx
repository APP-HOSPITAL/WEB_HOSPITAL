import React from 'react';

function EmployeeList({ people }) {
  return (
    <ul className="bg-gray-100 p-4 rounded-lg">
      {people.map((person) => (
        <li key={person.idStudent} className="text-blue-600">
        <h2 className="text-lg font-semibold">{person.name}</h2>   
            <p>ID del Estudiante: {person.idEmployee}</p>
            <p>Universidad: {person.nameRole}</p>
            <p>Semestre: {person.gender}</p>
           
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
