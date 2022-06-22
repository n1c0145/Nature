import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Datos from "./paginas/Datos";
import Contactos from "./paginas/Contactos";
import Galeria from "./paginas/Galeria";
import Inicio from "./paginas/Inicio";
import Servicios from "./paginas/Servicios";
import SobreNostros from "./paginas/SobreNostros";
import Navbar from "./componentes/Navbar";

function App() {
  return (

    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contactos' element={<Contactos />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/datos' element={<Datos />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/sobrenostros' element={<SobreNostros />} />
      </Routes>

    </div>



  );
}

export default App;
