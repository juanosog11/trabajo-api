import { Router } from 'express';
import * as usuarios_ctrl from '../controllers/usuarios.controllers.js'

const router = Router();



router.get('/usuarios', usuarios_ctrl.getUsuarios)

router.get('/usuarios/:email', usuarios_ctrl.getUsuarioEmail)

router.post('/usuarios',usuarios_ctrl.crearUsuario)

router.put('/usuarios/:email',usuarios_ctrl.actualizarUsuario)

router.delete('/usuarios/:email',usuarios_ctrl.borrarUsuario)


export default router;