import React, { useState } from 'react';
import UserTable from '../componentes/UserTable.jsx';
import AddUserForm from '../componentes/AddUserForm.jsx';
import EditUserForm from '../componentes/EditUserForm.jsx';
import '../estilos/datos.css';
import { v4 as uuidv4 } from "uuid";

function Datos() {

    const usersData = [

        {
            id: uuidv4(),
            nombre: "Nicolas",
            apellido: "Loza",
            edad: 23,
            correo: "nicolas.loza@gmail.com",
            direccion: "Tumbaco"
        },
        {
            id: uuidv4(),
            nombre: "Juan",
            apellido: "Perez",
            edad: 35,
            correo: "juanp@gmail.com",
            direccion: "Pifo"
        },
        {
            id: uuidv4(),
            nombre: "Diana",
            apellido: "Carolina",
            edad: 18,
            correo: "dcaro@gmail.com",
            direccion: "Cumbaya"
        }
    ]

    const [users, setUsers] = useState(usersData)
    //add
    const addUser = (user) => {
        user.id = uuidv4()
        setUsers([
            ...users,
            user
        ])
    }
    //delete
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    //edit
    const [editing, setEditing] = useState(false)

    const [currentUser, setCurrentUser] = useState({
        id: null,
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        direccion: ''
    })
    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            edad: user.edad,
            correo: user.correo,
            direccion: user.direccion,
        })
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updateUser : user)))
    }

    return (
        <div className='datos text-center px-5 py-5'>
            <div className='text fs-1 fw-bold'>Datos Usuarios</div>
              
            <div className='row'>
                <div className='col-lg'>
                  
                    {
                        editing ? (
                            <div>
                                <h2>Editar Usuario</h2>
                                <EditUserForm currentUser={currentUser} updateUser={updateUser} />
                            </div>
                        ) : (
                            <div>
                                <h2>Insertar Usuario</h2>
                                <AddUserForm addUser={addUser} /></div>)}
                </div>
                <div className='col-lg'>
                    <div><h2>Listas Usuarios</h2></div>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>
        </div >
    );
}

export default Datos;