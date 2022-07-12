import { Router } from 'express';
const usuarioController = require('../controllers/usuario.controller');
const router = Router();

router.get('/:id', usuarioController.getUsuario);
router.post('/create', usuarioController.createUsuario);
router.post('/delete', usuarioController.deleteUsuario);
router.post('/update/:id', usuarioController.updateUsuario);

export default router;
