import React,{useState} from 'react';
import '../estilos/datos.css';
import Formulario from "../componentes/Formulario.js";
import Tabla from "../componentes/Tabla.js";

const initialDb = [

{
  id:1,
  nombre:"Nicolas",
  apellido:"Loza",
  edad:23,
  telefono:998790522,
  direccion:"Tumbaco"
},{
  id:2,
  nombre:"Juan",
  apellido:"Perez",
  edad:33,
  telefono:996785322,
  direccion:"Pifo"
},
{
  id:3,
  nombre:"Carla",
  apellido:"Ayala",
  edad:18,
  telefono:996738112,
  direccion:"Cumbaya"
}
]


function Datos() {
   const[db,setDb]=useState(initialDb);

  return (
    <div>
  <div>Tabla de datos</div>
  <Formulario />
 <Tabla data={db}/>
    </div>
  );
}

export default Datos;