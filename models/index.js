 const express = require('express');
 const app=express();
 const router = express.Router()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
//const Sequelize = require('sequelize')
const Post = require ('./Post')
//Configuração
// Template engine
// Fazendo isto criando a pasta main eu não preciso ficar criando extrutura html 
app.engine ('handlebars',handlebars({'dafaultlayout':'main'}))
app.set ('view engine','handlebars')
//
// Body Parser
app.use (bodyParser.urlencoded ({extended: false}))
app.use (bodyParser.json())
//>>>>> ROTAS >>>>>>>>>>>
app.get('/',function (req, res){
//Post.findAll ({order: [['id','DESC']]}).then(function(posts){
  Post.findAll ({order: [['id','ASC']]}).then(function(posts){
  console.log (posts)
  res.render('home',{posts: posts})
  })
})

  //##### Criando o formulario
  app.get ('/add',function (req, res){
  res.render('formulario')
  })
  
  app.post('/cad',function (req, res){ 
   // res.render('formulario')
    Post.create ({  
    titulo: req.body.titulo,
    conteudo: req.body.conteudo}).then(function(){
     // res.send("Post criado com sucesso!")
      res.redirect('/')
    }).catch(function(erro){
      res.send("Houve um erro" + erro)
    })
  })
//=========DELETAR

app.get('/deletar/:id', (req, res) => {
  Post.destroy({
      where: {
          id: req.params.id

      }
  }).then(() => {
      res.redirect('/')
  }).catch((erro) => {
      res.send('Esta postagem não existe!')
  })
})
//+++++++++++  Editar
app.post('/editar/:id', function(req, res){
  Post.update({
     titulo: req.body.tituloedit
    },
    {
      where: {
        id: req.params.id

      }
    }).then(function(){
      res.redirect('/')
  }).catch(function(erro){
      res.send("Houve um erro: " + erro)
  })
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
// Servidor Rodando
app.listen (8081,function(){
  console.log (" *------------------------------------------------------*");
  console.log (" Servidor loucamente rodando na url http://localhost:8081");
  console.log (" Servidor loucamente rodando na url http://localhost:8081");
  console.log (" ********************************************************");
});
