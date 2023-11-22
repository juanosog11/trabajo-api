import  jwt  from "jsonwebtoken";
import config from '../config.js';
import { pool } from '../db.js';

export const verifytoken = async (req,res,next) =>{
    
    const {token} = req.cookies;
    console.log(token)
    try {

    if (!token) {
        return res.status(403).json({message:'No token provided'})
    } 

    const decoded = jwt.verify(token,config.SECRET)
    req.email=decoded.id
    const email = decoded.id
    console.log(email)
        
    
        const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])

        if (rows.length <= 0) {
            return res.status(404).json({message:'user not found' })
        }
        else {
            next()
        }

    
    } catch (error) {
        return res.status(500).json([
            "unauthorized"
        ])
    }


    

}


export const isConductor  = async (req,res,next) =>{
    console.log(req.email)
    const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ?", [req.email])
    console.log(rows)
        if (rows.length <= 0) {
            return res.status(404).json({ message: 'user not found' })
        }
        else {
            if (rows[0].rol == 'conductor')
            {
                next()
            }
            else{
                return res.status(404).json({ message: 'no tienes permiso' })
            }
        }

}

export const isAdmin  = async (req,res,next) =>{
    console.log(req.email)
    const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ?", [req.email])
    console.log(rows)
        if (rows.length <= 0) {
            return res.status(404).json({ message: 'user not found' })
        }
        else {
            if (rows[0].rol == 'admin')
            {
                next()
            }
            else{
                return res.status(404).json({ message: 'no tienes permiso' })
            }
        }

}


export const isAdminOrConductor  = async (req,res,next) =>{
    console.log(req.email)
    const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ?", [req.email])
    console.log(rows)
        if (rows.length <= 0) {
            return res.status(404).json({ message: 'user not found' })
        }
        else {
            if (rows[0].rol == 'admin' || rows[0].rol == 'conductor')
            {
                next()
            }
            else{
                return res.status(404).json({ message: 'no tienes permiso' })
            }
        }
}

export const authRequired = (req,res,next) => {
    
}