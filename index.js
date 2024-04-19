const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var aluno = {
    nome: "Bruno Yoshi",
    nota: 10,
    curso: "ADS",
}

app.get("/", (req,res)=>{
    res.send(aluno)
})

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("ok");
})

app.listen(8000,()=>{
    console.log("Servidor rodando na porta 8000");
})