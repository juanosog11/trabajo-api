import { useForm } from 'react-hook-form'
import { useAuth } from '../context/Authcontext';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function registerPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, errors: registerErrors, isAutheticated, esEmpresa, setEsEmpresa } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (isAutheticated) useNavigate("/servicios");
    }, [isAutheticated]);


    const onSubmit = handleSubmit(async (value) => {
        await signup(value);
    });



    const handleTipoUsuarioChange = (e) => {
        setEsEmpresa(e.target.value === 'empresa');
    };

    return (
        <div className='flex h-[calc(100vh-100px)] min-w-min items-center justify-center w-screen'>
            {/* Mostrar errores de registro */}

            {/* {Array.isArray(errores) && errores.length > 0 && (
                <div>
                    {errores.map((error, i) => (
                        <Message message={error} key={i} />
                    ))}
                </div>
            )} */}


                <div className='bg-zinc-800 max-w-md w-full p-14 rounded-md'>

                
            {registerErrors.map((error, i) => (
                <div className='bg-red-500 text-white text-center w-min-w-min' key={i}>
                <p>{(error.error)}</p> <br/>
                </div>
            ))}

                <form onSubmit={onSubmit} className='justify-center flex flex-col items-center'>
                {/* Campos comunes */}
                <label htmlFor="">Nombre</label>
                <input
                    type="text"
                    {...register('nombre', { required: true })}
                    placeholder='Nombre'
                    className='w-full bg-zinc- bg-slate-400 text-white px-6 py-2 rounded-md my-3'

                />
                {errors.nombre && <p className='text-red-500'>Se requiere nombre</p>}
                <label htmlFor="">Apellido</label> 
                <input
                    type="text"
                    {...register('apellido', { required: true })}
                    placeholder='Apellido'
                    className='w-full bg-zinc- bg-slate-400 text-white px-6 py-2 rounded-md my-3'
                />
                {errors.apellido && <p className='text-red-500'>Se requiere apellido</p>}

                <label htmlFor="">Email</label>
                <input
                    type="email"
                    {...register('email', { required: true })}
                    placeholder='Email'
                    className='w-full bg-zinc- bg-slate-400 text-white px-6 py-2 rounded-md my-3'
                />
                {errors.email && <p className='text-red-500'>Se requiere email</p>}
                <label htmlFor="">Celular</label>
                <input
                    type="number"
                    {...register('telefono', { required: true })}
                    placeholder='Teléfono'
                    className='w-full bg-zinc- bg-slate-400 text-white px-6 py-2 rounded-md my-3'
                />
                {errors.telefono && <p className='text-red-500'>Se requiere teléfono</p>}
                <label htmlFor="">Contraseña</label>
                <input
                    type="password"
                    {...register('contraseña', { required: true })}
                    placeholder='Contraseña'
                    className='w-full bg-zinc- bg-slate-400 text-white px-4 py-2 rounded-md my-3'
                />
                {errors.contraseña && <p className='text-red-500'>Se requiere contraseña</p>}

                {/* Selección de tipo de usuario */}
                <div className="flex justify-between m-4 items-center">

                    <div className='relative mr-10'>
                        <input
                            type="radio"
                            value="persona"
                            name="tipoUsuario"
                            onChange={handleTipoUsuarioChange}
                            checked={!esEmpresa}
                        />
                        <label htmlFor="persona" className="relative ">Persona</label>

                    </div>

                    <div>
                        <input
                            type="radio"
                            value="empresa"
                            name="tipoUsuario"
                            onChange={handleTipoUsuarioChange}
                            checked={esEmpresa}
                        />
                        <label htmlFor="empresa" className="relative">Empresa</label>

                    </div>


                </div>

                {/* Campos adicionales para empresa si esEmpresa es true */}
                {esEmpresa && (
                    <>
                        <label htmlFor="">rut</label>
                        <input
                            type="text"
                            {...register('rut', { required: true })}
                            placeholder='RUT'
                            className='w-full bg-zinc- bg-slate-400 text-white px-6 py-2 rounded-md my-3'
                        />
                        {errors.rut && <p className='text-red-500'>Se requiere RUT</p>}
                        <label htmlFor="">Razon social</label>
                        <input
                            type="text"
                            {...register('razonSocial', { required: true })}
                            placeholder='Razón Social'
                            className='w-full bg-zinc- bg-slate-400 text-white px-6 py-2 rounded-md my-3'
                        />
                        {errors.razonSocial && <p className='text-red-500'>Se requiere Razón Social</p>}
                    </>
                )}

                {/* Botón de envío */}
                <button type="submit" className="bg-slate-400 text-white px-4 py-2 rounded-full border border-white m-4 ">Registrar</button>
                <p className='text-center text-sm'>Ya tengo una cuenta <a className='text-blue-500' href='/login'>Login</a></p>
            </form>

                </div>
            
        </div>
    );
}

export default registerPage

