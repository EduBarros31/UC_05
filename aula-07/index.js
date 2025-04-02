const express = require("express")
const dotenv =  require("dotenv")
const routesAluno = require("./src/modules/aluno/routes/index")
const routesEndereco = require("./src/modules/endereco/routes")


dotenv.config();

const port = process.env.PORTA || 3000
const app = express();


app.use(express.json())



app.use(routesAluno);


app.use(routesEndereco);





app.listen(port, () => {
    console.log(`Servidor rodando em http:/localhost:${port}`)
});
