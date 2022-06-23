import React, { useState } from 'react';
import UserTable from '../componentes/UserTable.js';
import AddUserForm from '../componentes/AddUserForm.js';
import EditUserForm from '../componentes/EditUserForm.js';
import '../estilos/datos.css';
import { v4 as uuidv4 } from "uuid";

function Datos() {

    const usersData = [

        {
            id: uuidv4(),
            nombre: "Nicolas",
            apellido: "Loza",
            edad: 23,
            correo: "nicola.loza@gmail.com",
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
        edad:'',
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
        <div className='container'>
            <h1>CRUD HOOKS</h1>

            {
                editing ? (
                    <div>
                        <h2>Edit User</h2>
                        <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
                    </div>

                ) : (
                    <div>
                        <h2>Add user</h2>
                        <AddUserForm addUser={addUser} /></div>)}



            <div><h2>View User</h2></div>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div >
    );
}

export default Datos;