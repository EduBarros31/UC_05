const express = require("express")
const dotenv =  require("dotenv")
const alunoRoutes = require("./src/module/aluno/routes/index")
dotenv.config();

const port = process.env.PORTA
const app = express();


use(express.json())

app.use(alunoRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando em http:/localhost:${port}`)
});
