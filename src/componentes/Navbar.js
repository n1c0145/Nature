import React from 'react';
import {Link} from "react-router-dom";
import '../estilos/navbar.css';

function Navbar() {
    return (

        <div>

            <h1>Nav</h1>
            <nav>

                <ul>

                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sobrenostros">Sobre nosotros</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/contactos">Contactos</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><Link to="/datos">Datos</Link></li>
                </ul>
            </nav>

        </div>
    )

};       

export default Navbar;