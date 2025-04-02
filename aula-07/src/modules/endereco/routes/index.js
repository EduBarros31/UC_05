const express = require('express');


const EnderecoController = require('../controllers/index');



const router = express.Router();






//criar rota de endereco http://localhost:3000/endereco
router.post("/endereco", EnderecoController.criarEndereco)


//Buscar todo os enderecos
router.get("/endereco", EnderecoController.listarEnderecos)


//Buscar endereco
router.get("/endereco", EnderecoController.listarEndereco)


//Buscar Endereco por Aluno http://ocalhost:3000/endereco/aluno/aaaa
router.get("/endereco/aluno/:matricula", EnderecoController.listarEnderecoPorAluno)



//Buscar Endereco pelo CEP http://localhost:3000/cep/5900000
router.get("/endereco/:cep", EnderecoController.listarEnderecoCEP)


//Buscar Endereco por cidade
router.get("/endereco/:cep", EnderecoController.listarEnderecoPorCidade)



//rota para editar endereco
router.put("/endereco/:matricula", EnderecoController.editarEndereco)







module.exports = router