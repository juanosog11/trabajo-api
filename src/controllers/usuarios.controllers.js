import { pool } from '../db.js'
import {encryptPassword} from './encrypt.js'


export const getUsuarios = async (req, res) => {



    try {

        const [rows] = await pool.query('SELECT * FROM usuario');
        res.send({ rows })

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }

};


export const getUsuarioEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email])

        if (rows.length <= 0) {
            return res.status(404).json({ message: 'user not found' })
        }
        else {
            res.send(rows[0])
        }

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }

};

export const crearUsuario = async (req, res) => {
    const { nombre, apellido, email, telefono, contraseña} = req.body

    const contraseña2 = await encryptPassword(contraseña);
    console.log(contraseña2)
    const rol = 'Usuario'

    try {
        const [rows] = await pool.query(
            'INSERT INTO usuario (nombre, apellido, email, telefono, contraseña, rol) VALUES (?,?,?,?,?,?)'

            , [nombre, apellido, email, telefono, contraseña2, rol]);
        res.send({
            nombre,
            apellido,
            email,
            telefono,
            contraseña2,
            rol,
            rows

        })

        

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }

};


export const actualizarUsuario = async (req, res) => {

    const { email } = req.params;
    const { nombre, apellido, telefono, contraseña} = req.body
    const rol = 'Usuario'

    try {
        const [result] = await pool.query(
            "UPDATE usuario SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), telefono = IFNULL(?, telefono), contraseña = IFNULL(?, contraseña), rol = IFNULL(?, rol) WHERE email = ?",
            [nombre, apellido, telefono, contraseña, rol, email]
        );



        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "user not found" });
        }

        const [rows] = await pool.query("SELECT * FROM usuario WHERE email = ?", [email]);

        res.json(rows);

    } catch (error) {
        return res.status(500).json({
            error: "error update user"
        })
    }

};

export const borrarUsuario = async (req, res) => {
    const { email } = req.params;
    try {


        const [result] = await pool.query("DELETE FROM usuario WHERE email = ?", [email])
        console.log({ result })

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Email not found' })
        }
        else {
            res.sendStatus(204)
        }
    } catch (error) {
        return res.status(500).json({
            error: "error delete user"
        })
    }
};