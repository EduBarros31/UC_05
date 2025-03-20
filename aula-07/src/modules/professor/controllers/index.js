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
            const matricula = requisicao.params.id;
            const { nome, email, senha } = requisicao.body;
            if (!nome || !email || !senha) {
                return resposta.status(400).json({ mensagem: "Pelo menos um campo deve ser atualizado." });
            }
            const professorAtualizado = await professorModel.editar(matricula, nome, email, senha);
            if (!professorAtualizado.length) {
                return resposta.status(400).json({ mensagem: "Professor não encontrado." });
            }
            resposta.status(200).json({ mensagem: "Professor atualizado com sucesso", professor: professorAtualizado });
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao editar professor.", erro: error.message });
        }
    }



    static async listar(requisicao, resposta){
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
        const matricula = requisicao.params.matricula
        const professor = await professorModel.listarPorMatricula(matricula)
        if(!professor.length){
            return resposta.status(400).json({mensagem:"Professor não encontrado!"})
        }
        resposta.status(200).json(professor)
      } catch (error) {
        resposta.status(500).json({mensagem:" Erro ao listar Professor", erro: error.message})
      }


    }
   








    static async excluirTodos(requisicao, resposta) {
        try {
            await professorModel.excluirTodos();
            resposta.status(200).json({ mensagem: "Todos os professores foram excluídos com sucesso." });
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao excluir todos os professores.", erro: error.message });
        }
    }
    






  
   static async excluirPorMatricula(requisicao, resposta) {
    try {

        const matricula = requisicao.params.matricula;
        const professorExcluido = await professorModel.excluirPorMatricula(matricula);
        if (!professorExcluido.length) {
            return resposta.status(400).json({ mensagem: "Professor não encontrado." });
        }
        resposta.status(200).json({ mensagem: "Professor excluído com sucesso." });
    } catch (error) {
        resposta.status(500).json({ mensagem: "Erro ao excluir professor.", erro: error.message });
    }


   }




}



module.exports = professorControler
