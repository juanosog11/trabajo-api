import express from 'express'; // diferrentes accesos por http
import usuariosRoutes from './routes/usuarios.routes.js';
import autentication from './routes/autentication.routes.js';
import servicio from './routes/servicio.routes.js';
import ping from './routes/index.routes.js';
import morgan from 'morgan'; 


const app = express();

app.use(morgan('dev'))


app.use(express.json())

app.use('/api',ping);
app.use('/api',usuariosRoutes);
app.use('/api',autentication);
app.use('/api',servicio);


app.use((req,res,next) => {

    res.status(404).json(
        {
            message: 'endpoint not found'
        }

    )

})

export default app;
