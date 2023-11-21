
import { Router } from 'express';
import * as autocrt from '../controllers/autenticacion.controllers.js'

const router = Router();

router.post('/singUP',autocrt.signup);
router.post('/singIn',autocrt.signin);


export default router;