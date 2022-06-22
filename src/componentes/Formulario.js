import React from 'react';
import { useState, useEffect } from "react";

const initialForm = {
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    direccion: "",
    id: null
}

function Formulario() {

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => { }

    const handleSubmit = (e) => { }

    const handleReset = (e) => { }
    return (

        <div>

            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>

                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.nombre} />
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} value={form.apellido} />
                <input type="number" name="edad" placeholder="Edad" onChange={handleChange} value={form.edad} />
                <input type="number" name="telefono" placeholder="Telefono" onChange={handleChange} value={form.telefono} />
                <input type="text" name="direccion" placeholder="Direccion" onChange={handleChange} value={form.direccion} />

                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )

};

export default Formulario;