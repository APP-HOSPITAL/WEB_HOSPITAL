import BaseComponent from "@/Components/BaseComponent"
import CTaskFormUpdate from "@/Components/CTask/CTaskFormUpdate"
import PersonSelector from "@/Components/CTask/SelectStudent"
import PersonList from "@/Components/CTask/StudentList"
import CMap from "@/Components/Mapa"
import axios from "axios"

async function getStudentsTask(id){
    const result = await axios.get(`https://hospital.somee.com/api/students_stask/${id}`)
    return result.data

}
async function getStudents(id){

    const result = await axios.get(`https://hospital.somee.com/api/studentnotask/${id}`)
    return result.data
}




export default async  function Page({params}) {
    const students = await getStudents(params.id);
    const studentsInTask = await getStudentsTask(params.id)
  return (
    <BaseComponent>
    
    <div className="h-screen flex flex-col justify-center">
    <h2 className="text-3xl font-bold text-center mt-4">Edit tarea</h2>
    <CTaskFormUpdate id={params.id}></CTaskFormUpdate>
    <h2  className="text-3xl font-bold text-center mt-4">Designar tarea</h2>
    <PersonSelector id={params.id} people={students}/>
    <h2  className="text-3xl font-bold text-center mt-4">Estudiantes que estan designaods a esta tarea</h2>
    <PersonList people={studentsInTask} />
    
       
  </div>
  <CMap></CMap>
    </BaseComponent>
  )
}
