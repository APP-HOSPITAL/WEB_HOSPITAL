
function CTaskCard({dates,methodEdit}) {
    const handleDelete = (id) => {
      methodEdit(id)
    };
  
    const handleEdit = (id) => {
      location.href = `/tarea/${id}`;
    };
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Tabla de Tareas</h2>
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
                    <button
                      onClick={() => handleDelete(tarea.idTask)}
                      className="bg-red-500 text-white px-2 py-1 mr-2 rounded hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => handleEdit(tarea.idTask)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Editar
                    </button>
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
      </div>
    );
  }
  
  export default CTaskCard;
  