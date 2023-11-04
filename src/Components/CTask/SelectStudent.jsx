"use client"
import axios  from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function PersonSelector({ people ,id}) {
  const route = useRouter()
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeople, setSelectedPeople] = useState([]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAdd = (person) => {
    
    setSelectedPeople([...selectedPeople, person]);

    // const updatedItems = selectedPeople.filter((item) => item.name !== person.name);
    // setSelectedPeople(updatedItems);
  };
  const AddTask=()=>{
     
    try{
      selectedPeople.forEach((item)=>{
        axios.post("https://hospital.somee.com/api/addstudenttask",{
        "idTask": id,
        "idStudent": item.idStudent
      }).then(res=>{
        console.log("insert okey")
      })
    })
    }catch(err){
      console.error(err)
    }finally{
      route.refresh()
    }

  }

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <input
        type="text"
        placeholder="Buscar por nombre"
        onChange={handleSearch}
        className="border p-2 mb-2 block text-sm font-medium text-black"
      />
      <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={AddTask}>
        Designar Tarea
      </button>
      <ul className="space-y-2">
        {people
          .filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((person) => (    
            <li key={person.idStudent} className="text-blue-600">
              {person.name}{' '}
              <button onClick={() => handleAdd(person)} className="bg-blue-500 text-white px-2 py-1 rounded">
                Agregar
              </button>
            </li>
          ))}
      </ul>
      <h2 className="block text-sm font-medium text-black">Personas seleccionadas:</h2>
      <ul className="space-y-2">
        {selectedPeople.map((person) => (
          <li key={person.idStudent} className="block text-sm font-medium text-black">
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonSelector;
