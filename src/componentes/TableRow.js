
import React from 'react';

function TableRow({el}) {


    return (
        <tr>
            <td>{el.nombre}</td>
            <td>{el.apellido}</td>
            <td>{el.edad}</td>
            <td>{el.telefono}</td>
            <td>{el.direccion}</td>
            <td><button>Editar</button><button>Eliminar</button></td>

        </tr>

    )

};

export default TableRow;

