import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom'
function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: loginErrors,isAutheticated } = useAuth();
  const navigate = useNavigate();

  

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

console.log(isAutheticated)

useEffect(() => {
  if (isAutheticated) {
    return navigate('/servicios');
    
  }
})

//   useEffect(() => {
//     if (isAutheticated){ navigate("/servicios")}
// }, [isAutheticated,navigate]);

  return (
    <div className='flex h-[calc(100vh-100px)] min-w-min items-center justify-center w-screen'>
      <div className='bg-zinc-800 max-w-md w-full p-14 rounded-md'>

      {loginErrors.map((error, i) => (
          <div className='bg-red-500 text-white' key={i}>
            <p>{JSON.stringify(error.error)}</p><br />
            </div>
        ))}

        <h1 className='text-center text-3xl'>Login</h1>

        <form onSubmit={onSubmit} className='justify-center flex flex-col items-center'>


          <input
            type="email"
            {...register('email', { required: true })}
            placeholder='Email'
            className='w-full bg-zinc- bg-zinc-500 text-white px-6 py-2 rounded-md my-3'
          />
          {errors.email && <p className='text-red-500'>Se requiere email</p>}


          <input
            type="password"
            {...register('contraseña', { required: true })}
            placeholder='Contraseña'
            className='w-full bg-zinc- bg-zinc-500 text-white px-4 py-2 rounded-md my-3'
          />
          {errors.contraseña && <p className='text-red-500'>Se requiere contraseña</p>}

          <button type="submit" className="bg-slate-400 text-white px-4 py-2 rounded-full border border-white m-4 ">Registrar</button>
          <p className='text-center text-sm'>¿No tienes una cuenta? <a className='text-blue-500' href='/register'>Registrate</a></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage