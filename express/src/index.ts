// 1 -Iniciando Projeto;
    //npm init -y
    //npx tsc --init

console.log("Express + Ts");

//2- Iniciando o express
import { Request, Response } from "express";
const express = require('express');
const app = express();
app.use(express.json());

app.get("/api/teste", (req: any , res: any) => {
    return res.status(200).send({res: true})
})

//3-Rota com Post

app.post("/api/product", (req: any, res: any) => {
    console.log(req.body);

    return res.send("Produto adicionado!");
});

// 4 - Rota com qualquer verbo

app.all("/api/product/check", (req: Request, res: any) => {
    //req.method = VERBO HTTP

    if(req.method === "GET") {
        return res.send("Leu algum registro")
    }
    else if( req.method === "POST"){
        return res.send("Inseriu algum registro")
    }
    else {
        return res.send("Não podemos realizar esta operação;")
    }
});

//interfaces do express
app.get("api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando o tipo Response para as respostas")
})

// 6 - Enviando resposta com JSON
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        res: "ok"
    }).status(200);
});

// 7 - Router parameters
app.get("/api/product/:id", (req: any, res: any) => {
    console.log(req.params);
    return res.send("Produto não encontrado")
})


app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});

