import React from 'react';


function EmployeePage({employeeData}) {

  if (!employeeData) {
    // Si no se proporciona ningún dato de empleado, puedes mostrar un mensaje de error o un indicador de carga.
    return <div>Cargando datos del empleado...</div>;
  }

  return (
    <div className="max-w-md mx-auto">
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl font-semibold">{employeeData.name}</h1>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">Edad: {new Date(employeeData.age).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-2">Género: {employeeData.gender === 'MA' ? 'Masculino' : 'Femenino'}</p>
        <p className="text-gray-600 mb-2">Dirección: {employeeData.address}</p>
        <p className="text-gray-600 mb-2">Rol: {employeeData.nameRole}</p>
      </div>
    </div>
  </div>
  

  );
}

export default EmployeePage;
