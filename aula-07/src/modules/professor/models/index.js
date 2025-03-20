const { pool } = require('../../../config/database')


class professorModel {

   static async criar(matricula, nome, email, senha) {
      const dados = [matricula, nome, email, senha]
      const consulta = `insert into professor(matricula, nome, email, senha) values ($1, $2, $3, $4) returning *`;
      const novoProfessor = await pool.query(consulta,dados)
      return novoProfessor.rows;

   }

   static async editar(matricula, nome, email, senha) {
     const dados = [matricula, nome, email, senha]
     const consulta = `update set nome= $2, email = $3, senha = $4 where matricula = $1 returning *`
     const professorAtualizado = await pool.query(consulta, dados)
     return professorAtualizado.rows;
   }

  static async listar() {
     const consulta = `select from * professor `
     const professores = await pool.query(consulta)
     return professores.rows;

    
   }

   static async listarPorMatricula(matricula) {
   const dados = [matricula]
   const consulta = ` select * from professor where matricula = $1 `
   const professor = await pool.query(dados,consulta)
   return professor.rows;   
   
   }

   static async excluirPorMatricula(matricula) {
   const dados = [matricula]
   const consulta = ` delete * from professor where matricula = $1 returning *`;
   const professorExcluido = await pool.query(dados,consulta);
   return professorExcluido.rows;
   
 
   }

   static async excluirTodos() {
   const consulta = `delete from * professor`
   await pool.query(consulta)

    
   }



}



module.exports = professorModel