
import { Router } from 'express';
import * as autocrt from '../controllers/autenticacion.controllers.js'
import * as auten from '../middlewares/index.js'
import {validateSchema} from '../middlewares/validador.middlewares.js'
import {registerSchema,loginSchema} from '../schemas/auth.schema.js'

const router = Router();

router.post('/register',validateSchema(registerSchema),autocrt.signup);
router.post('/login',validateSchema(loginSchema),autocrt.login);
router.post('/logout',autocrt.logout);
router.get('/profile',[auten.verifytoken],autocrt.profile);

router.get("/verify",autocrt.verifyToken) ;
 

export default router; 
