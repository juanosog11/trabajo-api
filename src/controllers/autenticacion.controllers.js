
import { pool } from '../db.js'
import {encryptPassword,desencryptPassword} from './encrypt.js'
import  jwt  from 'jsonwebtoken'
import config from '../config.js'



export const signup = async (req, res) =>
{
    const { nombre, apellido, fecha_nacimiento, email, telefono, contraseña, rol ,rut, razon_social} = req.body
    
        

    
        const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])

        if (rows2.length <= 0) 
        {

            const contraseña2 = await encryptPassword(contraseña);
            console.log(contraseña2)
            console.log(rol)
            if(rol == null){
                const rol2 = 'Usuario'
                const [rows] = await pool.query(
                    'INSERT INTO usuario (nombre, apellido, fecha_nacimiento, email, telefono, contraseña, rol, rut, razon_social) VALUES (?,?,?,?,?,?,?,?,?)',
                    [nombre, apellido, fecha_nacimiento, email, telefono, contraseña2, rol2, rut, razon_social]
                );
                
                
            }
            else{
                const [rows] = await pool.query(
                    'INSERT INTO usuario (nombre, apellido, fecha_nacimiento, email, telefono, contraseña, rol, rut, razon_social) VALUES (?,?,?,?,?,?,?,?,?)',
                    [nombre, apellido, fecha_nacimiento, email, telefono, contraseña2, rol, rut, razon_social]
                );
                
                
            }
            
            const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])
    
            
            
            // res.send({
            //     nombre,
            //     apellido,
            //     fecha_nacimiento,
            //     email,
            //     telefono,
            //     contraseña2,
            //     rol,
                
            //         })


            const id = rows2[0].email

            const token = jwt.sign({id:id},config.SECRET,{expiresIn: 86400})
                    
            res.json({token: token})
            
            
            
        }
        else {
            res.send('user exist')
        }
    
        try{

    } catch (error) {
        return res.status(500).json({
            error: "Error getting employees"
        })
    }


}


export const signin = async (req, res) =>
{

    const { email, contraseña} = req.body
    
    try{

    
        const [rows2] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])

        if (rows2.length > 0) 
        {

            
            
            const iguales = await desencryptPassword(contraseña,rows2[0].contraseña);
            
            if (!iguales) 
            {
                return res.status(401).json({token:null, message:'invalid password'})
                
            }

            const id = rows2[0].email

            const token = jwt.sign({id:id},config.SECRET,{expiresIn: 86400})
                    
            res.json({token: token})
            
            
            
        }
        else {
            res.send('user exist')
        }
    
    

    } catch (error) {
        return res.status(500).json({
            error: "Error getting employees"
        })
    }

}