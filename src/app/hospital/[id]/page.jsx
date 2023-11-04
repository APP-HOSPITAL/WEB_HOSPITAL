import BaseComponent from "@/Components/BaseComponent"
import CHospitalFormUpdate from "@/Components/CHospital/CHospitalFormUpdate"
import EmployeeList from "@/Components/CHospital/EmployeeList"
import EmployeeSelector from "@/Components/CHospital/SelectEmployee"
import axios from "axios"


async function getEmployeeHospital(id){
    const result = await axios.get(`https://hospital.somee.com/api/employee_hospital/${id}`)
    return result.data

}
async function getEmployeenoHospital(id){

    const result = await axios.get(`https://hospital.somee.com/api/employeenohospital/${id}`)
    return result.data
}


export default async function Page({params}) {
    const {id} = params

    const lstEmployesnoHospital = await getEmployeenoHospital(id)
    const lstEmployeeInHospital = await getEmployeeHospital(id)
  return (
    <BaseComponent>
    
    <div className="h-screen flex flex-col justify-center">
    <h2 className="text-3xl font-bold text-center mt-4">Informacion del Hospital</h2>
    <CHospitalFormUpdate id={id}></CHospitalFormUpdate>
    <h2  className="text-3xl font-bold text-center mt-4">Designar tarea</h2>
    <EmployeeSelector id={id} people={lstEmployesnoHospital}></EmployeeSelector>
    <h2  className="text-3xl font-bold text-center mt-4">Estudiantes que estan designaods a esta tarea</h2>
    <EmployeeList people={lstEmployeeInHospital}></EmployeeList>
           
       
  </div>
    </BaseComponent>
  )
}
