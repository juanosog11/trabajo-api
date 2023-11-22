import {z} from 'zod'

export const registerSchema = z.object(
{
nombre: z.string({required_error: 'nombre es requerido   '}),
apellido: z.string({required_error: 'apellido es requerido  '}),
email: z.string({required_error: 'correo es requerido  '}).email({required_error: 'ivalid email  '}),
telefono: z.string({required_error: 'telefono es requerido  '}),
contraseña: z.string({required_error: 'username es requerido  '}).min(8,{required_error: 'minimo 6 caracteres  '})
}

)


export const loginSchema = z.object(
{
    email: z.string({required_error: ' correo es requerido'}).email({required_error: 'ivalid email'}),
    contraseña: z.string({required_error: 'password es requerido'}).min(8,{required_error: 'minimo 6 caracteres'})

}

)