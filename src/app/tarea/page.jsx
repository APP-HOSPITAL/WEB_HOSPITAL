
import BaseComponent from "@/Components/BaseComponent";
import CButtons from "@/Components/CTask/CButtons";
import CTaskForm from "@/Components/CTask/CTaskForm";
import CTaskList from "@/Components/CTask/CTaskList";
import axios from "axios";

function filterTasksByStatus(tasks, status) {
  return tasks.filter(task => task.statusTask === status);
}

async function listtasks(){


   const result = await axios.get("https://hospital.somee.com/api/listtasks")
   return result.data
}

async function Page() {
    const dates =await listtasks()
    const taskAC=filterTasksByStatus(dates,"AC");
    const taskFI=filterTasksByStatus(dates,"FI");
    const taskEX=filterTasksByStatus(dates,"EX");
 
    return (
      <BaseComponent>
           <CTaskForm></CTaskForm>
         
           <h2 className="text-2xl font-bold mb-4">Tabla de Tareas Activas</h2>
        <CTaskList dates={taskAC}></CTaskList>

        <h2 className="text-2xl font-bold mb-4">Tabla de Tareas Expiradas</h2>

        <CTaskList dates={taskEX}></CTaskList>

        <h2 className="text-2xl font-bold mb-4">Tabla de Tareas Finalizadas</h2>
        
        <CTaskList dates={taskFI}></CTaskList>
      </BaseComponent>
    );
  }
  
  export default Page;
  