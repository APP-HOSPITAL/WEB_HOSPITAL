
import axios from "axios"
import FormHospital from "@/Components/CHospital/FormHospital";
import BaseComponent from "@/Components/BaseComponent";
import ButtonH from "@/Components/CHospital/ButtonH";
import CMap from "@/Components/Mapa";
import CListHospitals from "@/Components/CHospital/CListHospitals";

function filterHospitalForAddres(tasks, addres) {
  return tasks.filter(task => task.address === addres);
}


const getHospital=async ()=>{
  const result = await axios.get("https://hospital.somee.com/api/listhospital")
  return result.data
}

async function App () {
  const dates = await getHospital()

  const hospitalCbba= filterHospitalForAddres(dates,"Cochabamba")
  return (
    <BaseComponent>
      <FormHospital></FormHospital>
      <div>
      <h2 className="text-2xl font-bold mb-4">Tabla de Hospitales</h2>
      <div className="overflow-x-auto">
        <CListHospitals dates={dates}></CListHospitals>
      </div>
      <h2 className="text-2xl font-bold mb-4">Tabla de Hospitales de cochabamba</h2>
      <div className="overflow-x-auto">
        <CListHospitals dates={hospitalCbba}></CListHospitals>
      </div>
    </div>
    <br></br>
    <h2 className="text-2xl font-bold mb-4">Mapda de hospitales</h2>
    <CMap></CMap>
    </BaseComponent>
  );
};
export default App;


