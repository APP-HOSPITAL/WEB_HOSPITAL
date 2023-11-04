"use client"
import axios from "axios"
import { Overpass_Mono } from "next/font/google";
import FormHospital from "@/Components/CHospital/FormHospital";
import Map from "@/Components/Mapa";
import BaseComponent from "@/Components/BaseComponent";


const App = () => {
  

  return (
    <BaseComponent>
      <Map></Map>
    </BaseComponent>
  );
};
export default App;
