import React from 'react';
import { useForm } from "react-hook-form";

function EditUserForm(props) {
    //console.log(props.currentUser);

    const {register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });
    setValue('nombre', props.currentUser.nombre)
    setValue('apellido', props.currentUser.apellido)
    setValue('edad', props.currentUser.edad)
    setValue('correo', props.currentUser.correo)
    setValue('direccion', props.currentUser.direccion)

    const onSubmit = (data, e) => {
        //  console.log(data);
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data)
        //clean
        e.target.reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input type="text" name="nombre"
                {...register("nombre", {
                    required: { value: true, message: 'Campo Requerido' }
                })}

            />
            <div>{errors?.nombre?.message}</div>
            <label>Apellido</label>
            <input type="text" name="apellido"
                {...register("apellido", {
                    required: { value: true, message: 'Campo Requerido' }
                })}

            />
            <div>{errors?.apellido?.message}</div>
            <label>Edad</label>
            <input type="number" name="edad"
                {...register("edad", {
                    required: { value: true, message: 'Campo Requerido' }
                })}

            />
            <div>{errors?.edad?.message}</div>
            <label>Correo</label>
            <input type="text" name="correo"
                {...register("correo", {
                    required: { value: true, message: 'Campo Requerido' }
                })}

            />
            <div>{errors?.correo?.message}</div>
            <label>Direccion</label>
            <input type="text" name="direccion"
                {...register("direccion", {
                    required: { value: true, message: 'Campo Requerido' }
                })}

            />
            <div>{errors?.direccion?.message}</div>
            <button>Edit user</button>
        </form >

    )

};

export default EditUserForm;