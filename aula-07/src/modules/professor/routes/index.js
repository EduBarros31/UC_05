const express = require('express');
const professorController = require('../controllers/index');
const router = express.Router();

router.post('/professores', professorController.criar);
router.put('/professores/:matricula', professorController.editar);
router.get('/professores', professorController.listar);
router.get('/professores/:matricula', professorController.listarPorMatricula);
router.delete('/professores/:matricula', professorController.excluirPorMatricula);
router.delete('/professores', professorController.excluirTodos);





module.exports = router;