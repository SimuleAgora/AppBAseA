///////////////////////////////////////////////
/// Conexão com mariaDB ///////////////////////
///////////////////////////////////////////////
const Sequelize = require('sequelize')
//@@@@@@@@@@@ Conexão DB @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Conexão com o banco de dados MySql @@@@@@@
// Informar o Banco de dados: teste, o usuário root e a senha em branco
const sequelize = new Sequelize ('postapp','root','',{ 
  //informar a máquina onde esta rodando em host:
  host: "localhost", 
  // Informar em dialect que tipo de banco de dados esta se conectando.
  dialect: 'mariadb'  
  })


//----@@@@@ Teste da conexão do banco de dados
sequelize.authenticate().then(function(){
  console.log ("Conectado ao banco de dados com sucesso!")
}).catch (function(erro){
  console.log("Falha ao se conectar: " + erro)
  })

  module.exports = {
      Sequelize: Sequelize,
      sequelize: sequelize
  }