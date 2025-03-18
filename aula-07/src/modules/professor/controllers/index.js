const  professorModel = require('../models/index')


class professorControler {
   
    static async criar(requisicao, resposta){
        try {
            const { matricula, nome, email, senha } = requisicao.body
            if(!matricula || !nome || !email || !senha){
              return  resposta.status(400).json({mensagem:"Todos os campos devem ser fornecidos!"})
            }
            const novoProfessor = await professorModel.criar(matricula, nome, email, senha)
            resposta.status(201).json({mensagem:"Professor criado com sucesso", Professor: novoProfessor})
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao criar o Professor!", erro: error.message})
        }
    }


    static async editar(requisicao, resposta){
        try {
            const { matricula, nome, email, senha } = requisicao.body
            if(!matricula || !nome || !email || !senha){
              return  resposta.status(400).json({mensagem:"Todos os campos devem ser fornecidos!"})
            }
            const novoProfessor = await professorModel.criar(matricula, nome, email, senha)
            resposta.status(201).json({mensagem:"Professor criado com sucesso", Professor: novoProfessor})
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao criar o Professor!", erro: error.message})
        }
    }

    static async listarTodos(requisicao, resposta){
        try {
            const professores = await professorModel.listar()
            if(professores.length === 0){
                return resposta.status(400).json({mensagem:"Nao existe professores a serem exibidos"})
            }
            resposta.status(200).json(professores)

            } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao criar o Professor!", erro: error.message})
        }
    }

    static async listarPorMatricula(requisicao,resposta){
      try {
        const matricula = requisicao.params.id
        const professor = await professorModel.listarPorMatricula(matricula)
        if(!professor){
            return resposta.status(400).json({mensagem:"Professor não encontrado!"})
        }
        resposta.status(200).json(professor)
      } catch (error) {
        resposta.status(500).json({mensagem:" Erro ao listar Professor", erro: error.message})
      }


    }





}

module.exports = professorControler
