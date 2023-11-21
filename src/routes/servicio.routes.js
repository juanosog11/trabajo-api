import { Router } from 'express';
import * as servicio_ctrl from '../controllers/servicios.controllers.js'
import * as auten from '../middlewares/index.js'

const router = Router();


router.get('/servicios', [auten.verifytoken,auten.isAdminOrConductor] ,servicio_ctrl.getServicios)


router.get('/servicios/:email', servicio_ctrl.getServiciosEmail)

router.post('/servicios',servicio_ctrl.crearServicio)

router.put('/servicios/:id',servicio_ctrl.actualizarServicio)

router.delete('/servicios/:id',auten.verifytoken,servicio_ctrl.borrarServicio)

export default router;