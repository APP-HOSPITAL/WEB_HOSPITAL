"use client"
import { GoogleMap, Marker ,useLoadScript,useJsApiLoader } from '@react-google-maps/api';
import  {useState} from "react"

const center = {
  lat: -3.745,
  lng: -38.523
};

const CMap = () => {
  const [center, setCenter] = useState({
    lat: 37.422222,
    lng: -122.083333,
  });
  const {isLoaded} = useLoadScript({
    // id:"",
    googleMapsApiKey:"AIzaSyBfKs1QjzjVJGvbn6A2QESseVoxKi5EJks"
  })
  if(!isLoaded)return <div>..loaded</div>
  return (
    <MAP></MAP>
  );
};

export default CMap;


function MAP(){
    return (<GoogleMap zoom={15} center={center} mapContainerClassName='map-container'>
               <Marker center={center}/>
            </GoogleMap>)
}
