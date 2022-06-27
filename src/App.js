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
import Testimonios from "./paginas/Testimonios";
import BarraNavegacion from "./componentes/BarraNavegacion";

function App() {
  return (

    <div className='App'>
      <BarraNavegacion />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/testimonios' element={<Testimonios />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contactos' element={<Contactos />} />
        <Route path='/datos' element={<Datos />} />
      </Routes>

    </div>



  );
}

export default App;
