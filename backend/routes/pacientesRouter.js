import express from "express";
const routerPacientes = express.Router();

import pacientesController from '../controllers/pacientesController.js';


// Ruta para registrar un paciente
routerPacientes.post('/registrar', pacientesController.registrarPaciente);

// Ruta para iniciar sesión de un paciente
routerPacientes.post('/login', pacientesController.loginPaciente);


export default routerPacientes;
