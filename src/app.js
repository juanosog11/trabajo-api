import express from 'express'; // diferrentes accesos por http
import usuariosRoutes from './routes/usuarios.routes.js';
import autentication from './routes/autentication.routes.js';
import servicio from './routes/servicio.routes.js';
import ping from './routes/index.routes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express();

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }

))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', ping);
app.use('/api', usuariosRoutes);
app.use('/api', autentication);
app.use('/api', servicio);


app.use((req, res, next) => {

    res.status(404).json(
        {
            message: 'endpoint not found'
        }

    )

})

export default app;
