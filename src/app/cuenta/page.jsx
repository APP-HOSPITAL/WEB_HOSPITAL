"use client"
import { useState ,useEffect} from "react";
import axios from "axios"
import { Overpass_Mono } from "next/font/google";
import BaseComponent from "@/Components/BaseComponent";
import EmployeePage from "@/Components/InfoPerson";
import { useRouter } from "next/navigation";

const App = () => {

  const router=useRouter()
  const [person,setPerson] = useState({})
  useEffect(() => {
    const id = localStorage.getItem("idemployee0000");
    
    if(id > 0){
      axios.get(`https://hospital.somee.com/api/employee/${id}`).then((res) => {
      setPerson(res.data)
    });
    }else{
      router.push("/login");
    }
  }, []); 
  return (
    <BaseComponent>
        <EmployeePage employeeData={person}></EmployeePage>
    </BaseComponent>
  );
};
export default App;
