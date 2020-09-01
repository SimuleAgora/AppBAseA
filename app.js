const express = require('express');
const app=express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require('./routes/admin')
const path =  require('path');
const { PassThrough } = require('stream');
//const Sequelize = require('sequelize')
//const Post = require ('./Post')
//Configuração
// Template engine
// Fazendo isto criando a pasta main eu não preciso ficar criando extrutura html 
app.engine ('handlebars',handlebars({'dafaultlayout':'main'}))
app.set ('view engine','handlebars')
//
// Body Parser
app.use (bodyParser.urlencoded ({extended: false}))
app.use (bodyParser.json())
//------Publics----------
//app.use(express.static(path.join(__dirname,"public")))
app.use(express.static('public'));
//>>>>> ROTAS >>>>>>>>>>>
app.use('/admin',admin)
//----------Conexão com o Banco de Dados MariaDB--------------------
//Fazendo a Conexão com o Banco de Dados
const Sequelize = require ('sequelize')
//const { sequelize } = require('sequelize')
const sequelize = new Sequelize ('Test','root','',{
    host:'localhost',
    dialect: 'mariadb'
})

//----@@@@@ Teste da conexão do banco de dados
sequelize.authenticate().then(function(){
  console.log ("*---------------------------------------*")
  console.log ("Conectado ao banco de dados com sucesso!")
  console.log ("Conectado ao banco de dados com sucesso!")
  console.log ("*---------------------------------------*")
}).catch (function(erro){
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log("Falha ao se conectar ao banco de dados: " + erro)
  console.log("MySql -h localhost -u root -p")
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  })

  module.exports = {
      Sequelize: Sequelize,
      sequelize: sequelize
  }
//------------------------------------------------------------------


//app.get('/',function (req, res){
////Post.findAll ({order: [['id','DESC']]}).then(function(posts){
//  Post.findAll ({order: [['id','ASC']]}).then(function(posts){
//  console.log (posts)
//  res.render('home',{posts: posts})
//  })
//})
////Outros

//module.exports = app;
// Outros
const PORT = 8081
app.listen (PORT,()=>{ 
  console.log ("*--------------------------*")
  console.log ("*   Servidor rodando!      *")
  console.log ("* http//localhost:"+PORT+"     *")
  console.log ("*--------------------------*")
})

//-----------------------------------
//-----Aplicacao NODEJS --------Teste
// -----Versao 14/08/2020------------
// Testes iniciais-------------------