const express = require("express")
const dotenv =  require("dotenv")
const alunoRoutes = require("./src/module/aluno/routes/index")


dotenv.config();

const port = process.env.PORTA || 3000
const app = express();


app.use(express.json())

app.use(alunoRoutes);

app.use((requisicao, resposta) => {
    resposta.status(404).json({ error: "Rota não encontrada" });
});

app.use((erro, requisicao, resposta) => {
    console.error(erro.stack);
    resposta.status(500).json({ erro: "Erro interno do servidor" });
});



app.listen(port, () => {
    console.log(`Servidor rodando em http:/localhost:${port}`)
});
