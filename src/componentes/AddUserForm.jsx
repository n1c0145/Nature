import React from 'react';
import { useForm } from "react-hook-form";

function AddUserForm(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data,e) => {
      //  console.log(data);
        props.addUser(data)
        //clean
        e
        .target.reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input type="text" name="nombre" 
            {...register("nombre", {
                required: {value: true, message: 'Campo Requerido'}
            })}

             />
            <div>{errors?.nombre?.message}</div>
            <label>Apellido</label>
            <input type="text" name="apellido" 
            {...register("apellido", {
                required: {value: true, message: 'Campo Requerido'}
            })}

             />
            <div>{errors?.apellido?.message}</div>
            <label>Edad</label>
            <input type="number" name="edad"
            {...register("edad", {
                required: {value: true, message: 'Campo Requerido'}
            })}

             />
            <div>{errors?.edad?.message}</div>
            <label>Correo</label>
            <input type="text" name="correo" 
            {...register("correo", {
                required: {value: true, message: 'Campo Requerido'}
            })}

             />
                  <div>{errors?.correo?.message}</div>
            <label>Direccion</label>
            <input type="text" name="direccion" 
            {...register("direccion", {
                required: {value: true, message: 'Campo Requerido'}
            })}

             />
                  <div>{errors?.direccion?.message}</div>
<button>Add new user</button>
        </form >

    )

};

export default AddUserForm;