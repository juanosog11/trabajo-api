
import { pool } from '../db.js'


export const getServicios = async (req, res) => {
    
    try {

        const [rows] = await pool.query('SELECT * FROM servicio');
        res.send({ rows })

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }

};


export const getServiciosEmail = async (req,res) => {
    
    const { email } = req.params;

    try {
        const [rows] = await pool.query("SELECT * FROM servicio WHERE email = ?", [email])

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

export const crearServicio = async (req,res) => {
    const { ceco, recorrido, email} = req.body

    

    try {
        const [rows] = await pool.query(
            'INSERT INTO servicio (Ceco, recorrido, email) VALUES (?,?,?)',
            [ceco, recorrido, email]
        );
        
        res.send({
            ceco, recorrido, email

        })

    } catch (error) {
        return res.status(500).json({
            error: "Error getting user"
        })
    }
};


export const actualizarServicio = async (req,res) => {
    const { id } = req.params; 
    const { ceco, recorrido, email } = req.body;

try {
    const [result] = await pool.query(
        "UPDATE servicio SET Ceco = IFNULL(?, Ceco), recorrido = IFNULL(?, recorrido), email = IFNULL(?, email) WHERE id = ?",
        [ceco, recorrido, email, id]
    );

    if (result.affectedRows === 0) {
        return res.status(404).json({ message: "service not found" });
    }

    const [rows] = await pool.query("SELECT * FROM servicio WHERE id = ?", [id]);

    res.json(rows);
} catch (error) {
    return res.status(500).json({
        error: "error updating service"
    });
}

};

export const borrarServicio = async (req,res) => 
{
    const { id } = req.params; 

    try {
        const [result] = await pool.query("DELETE FROM servicio WHERE id = ?", [id]);
    
        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Service not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({
            error: "Error deleting service"
        });
    }
    

};

