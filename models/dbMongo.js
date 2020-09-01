////////////////////////////////////////
/// outra forma de configurar o mongo ///
/// Configuração com Mongo            ///
/////////////////////////////////////////
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// Configurando o mongoose -  Conexão com Atlas Cloud.
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://dbSimuleAgora:<PASSWORD>@cluster0.eoyxc.mongodb.net/<dbname>?retryWrites=true&w=majority",
 { 

 useNewUrlParser: true 
})
.then(()=>{console.log("Mongobd Conectado...");})
.catch((error)=>{console.log("Houve um erro: " + error);
})

//Model- Usuarios

//definindo model
//const UsuarioSchema = mongoose.schema({
const UsuarioSchema = new Schema({

 nome:{
  type: String,
  require: true
 },
 sobrenome:{
  type: String,
  required: true
 },
 email:{
  type: String,
  required: true
 },
 idade:{
  type: Number,
  required: true
 },
 pais:{
  type: String,
 } 
})

//collection
mongoose.model('usuarios', UsuarioSchema )

const Victor = mongoose.model('usuarios')

new William({
 nome: "William",
 sobrenome: "Silva",
 email: "william.silva@gmail.com",
 idade: 41,
 pais:"Brasil"
}).save().then(() => {
 console.log ("usuario criado com sucesso")
}).catch((err) => {
 console.log ("Houve erro ao criar o usuario" +err)
})S