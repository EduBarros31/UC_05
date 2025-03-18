const express = require('express')


const AlunoController = require('../controllers/index')



const router = express.Router()


router.post("/aluno", AlunoController.criar)
router.put("/aluno/:matrocula", AlunoController.editar)
router.get("/alunos", AlunoController.listarTodos)
router.get("/aluno/:matricula", AlunoController.listarPorMatricula)
router.delete("/aluno/:matricula", AlunoController.excluirPorMatricula)
router.delete("/alunos", AlunoController.excluirTodos)



module.exports = router;