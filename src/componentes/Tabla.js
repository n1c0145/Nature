import React from 'react';
import TableRow from "./TableRow.js";

function Tabla({ data }) {

    return (

        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>
                    {data.lenght === 0 ? <tr><td colSpan="6">Sin datos</td></tr> : data.map((el) =>
                        <TableRow key={el.id} el={el}/>
                    )}
                </tbody>

            </table>

        </div>

    );

};

export default Tabla;