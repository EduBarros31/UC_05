const express = require("express")
const dotenv =  require("dotenv")
const routerAluno = require("./src/modules/aluno/routes/index")
const routerEndereco = require("./src/modules/endereco/routes")


dotenv.config();

const port = process.env.PORTA || 3000
const app = express();


app.use(express.json())



app.use(routerAluno);


app.use(routerEndereco);





app.listen(port, () => {
    console.log(`Servidor rodando em http:/localhost:${port}`)
});
