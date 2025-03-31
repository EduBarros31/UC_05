const EnderecoModel = require('../models/index')


class EnderecoController{
  static async criar(req,res) {
   try {
     const { matricula,cep,numero,ponto_referencia } = req.body
     if(!matricula || !cep || !numero || !ponto_referencia){
       return res.status(400).json({mensagem:"Todos os campos devem ser fornecidos!"})
     }
     const novoEndereco = await EnderecoModel.criarEndereco(matricula,cep,numero,ponto_referencia)     
     res.status(201).json({mensagem:"Endereco criado com sucesso",endereco: novoEndereco})

   } catch (error) {
      res.status(500).json({mensagem:"Erro ao criar o endereco!", erro: error.message})
    
   }


  }






  
  static async listarEnderecos(req, res){
      try {
        const enderecos = await EnderecoModel.listarEnderecos()
        if(enderecos.length === 0){
          return res.status(400).json({mensagem:"Não existem enderecos a serem exibidos!"})
        }
        res.status(200).json(enderecos)

      } catch (error) {
        res.status(500).json({mensagem:"Erro ao listar os enderecos!", erro: error.message})
        
      }
  }




 

  static async listarEndereco(req, res){
    try {
      const matricula = req.params.matricula
      const endereco = await EnderecoModel.listarEndereco(matricula)
      if(endereco.length === 0){
        return res.status(400).json({mensagem:"Endereco não encontrado!"})
      }
      res.status(200).json(endereco)

    } catch (error) {
      res.status(500).json({mensagem:"Erro ao listar o endereco!", erro: error.message})
    }
  }


  



  static async listarEnderecoCEP(req, res){
    try {
      const cep = req.params.cep
      const endereco = await EnderecoModel.listarEnderecoCEP(cep)
      if(endereco.length === 0){
        return res.status(400).json({mensagem:"Endereco não encontrado!"})
      }
      res.status(200).json(endereco)

    } catch (error) {
      res.status(500).json({mensagem:"Erro ao listar o endereco!", erro: error.message})
    }
  }





  static async listarEnderecoPorCidade(req, res){
    try {
      const cidade = req.params.cidade
      const endereco = await EnderecoModel.listarEnderecoPorCidade(cidade)
      if(endereco.length === 0){
        return res.status(400).json({mensagem:"Endereco não encontrado!"})
      }
      res.status(200).json(endereco)

    } catch (error) {
      res.status(500).json({mensagem:"Erro ao listar o endereco!", erro: error.message})
    }
  }











   
  static async editar(req,res) {
    try {
      const matricula = req.params.matricula
      const { cep,numero,ponto_referencia } = req.body
      if(!cep || !numero || !ponto_referencia){
        return res.status(400).json({mensagem:"Pelo menos um campo atualizado"})
      }
      const enderecoAtualizado = await EnderecoModel.editarEndereco(matricula,cep,numero,ponto_referencia)
      if(!enderecoAtualizado){
        return res.status(400).json({mensagem:"Endereco não encontrado"})
      }

      res.status(200).json({mensagem:"Endereco atualizado com sucesso", endereco: enderecoAtualizado}) 

    } catch (error) {

      res.status(500).json({mensagem:"Erro ao editar o endereco!", erro: error.message})
    }


 }




static async excluirEndereco(req, res){
  try {
    const matricula = req.params.matricula
    const enderecoExcluido = await EnderecoModel.excluirEndereco(matricula)
    if(!enderecoExcluido){
      return res.status(400).json({mensagem:"Endereco não encontrado!"})
    }
    res.status(200).json({mensagem:"Endereco excluido com sucesso", endereco: enderecoExcluido})

  } catch (error) {
    res.status(500).json({mensagem:"Erro ao excluir o endereco!", erro: error.message})
  }



}





  
  static async excluirTodos(req, res){
    try {
      await EnderecoModel.excluirTodos()
      res.status(200).json({mensagem:"Todos os enderecos excluidos"})

    } catch (error) {
      res.status(500).json({mensagem:"Erro ao excluir todos os enderecos!", erro: error.message})
  }

}



}

module.exports = EnderecoController