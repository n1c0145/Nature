import React from 'react';


function UserTable(props) {


    return (

        <table>

            <thead>

                <tr>

                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.users.length > 0 ?
                        props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.edad}</td>
                                <td>{user.correo}</td>
                                <td>{user.direccion}</td>
                                <td>
                                    <button onClick={()=> props.editRow(user)}>Editar</button>
                                    <button onClick={() => props.deleteUser(user.id)}>Eliminar</button>
                                </td>


                            </tr>
                        )) : (<tr><td colSpan={3}>No users</td></tr>)}

            </tbody>
        </table>
    )

};

export default UserTable;