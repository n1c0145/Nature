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

        <div className='text-start px-5'>

<form onSubmit={handleSubmit(onSubmit)}>
            <label className='form-label'>Nombre</label>
            <input className='form-control' type="text" name="nombre"
                {...register("nombre", {
                    required: { value: true, message: 'Campo Requerido' }
                })}
            />
            <div className='class="alert alert-danger'>{errors?.nombre?.message}</div>
            <label className='form-label'>Apellido</label>
            <input className='form-control' type="text" name="apellido"
                {...register("apellido", {
                    required: { value: true, message: 'Campo Requerido' }
                })}
            />
            <div className='class="alert alert-danger'>{errors?.apellido?.message}</div>
            <label className='form-label'>Edad</label>
            <input className='form-control' type="number" name="edad"
                {...register("edad", {
                    required: { value: true, message: 'Campo Requerido' }
                })}
            />
            <div className='class="alert alert-danger'>{errors?.edad?.message}</div>
            <label className='form-label'>Correo</label>
            <input className='form-control' type="text" name="correo"
                {...register("correo", {
                    required: { value: true, message: 'Campo Requerido' }
                })}
            />
            <div className='class="alert alert-danger'>{errors?.correo?.message}</div>
            <label className='form-label'>Direccion</label>
            <input className='form-control' type="text" name="direccion"
                {...register("direccion", {
                    required: { value: true, message: 'Campo Requerido' }
                })}
            />
            <div className='class="alert alert-danger'>{errors?.direccion?.message}</div>
            <div className='text-center'>
                <button className='btn btn-success mt-3'>Guardar</button>
                </div>
        </form >

        </div>
       

    )

};

export default EditUserForm;