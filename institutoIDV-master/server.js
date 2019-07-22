const bodyparser=require('body-parser')
const express=require('express')
const app=express()


app.use(express.static('.'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())




var logadComSucesso = {"status":"200","message":"Usuário logado com sucesso!"};
var adicionarComsucesso={"status":200,"message":"Adicionado com Sucesso!"}

var dadosRecebidos = {"status":"200","message":"Dados recebidos.", "itens":[]};

dadosRecebidos.itens.push({"title":"teste","description":"teste", "id":2});

app.get('/json/login.json',(req,res) =>res.send(logadComSucesso))




app.listen(8080,()=>console.log("Executando...."));


