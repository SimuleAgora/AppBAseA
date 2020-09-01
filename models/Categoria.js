//@@@@ Define e a file decription Models DataSet
// categoria - É o nome da tabela dentro da Base de Dados
//Fazendo a Conexão com o Banco de Dados
const Sequelize = require ('sequelize')
//const { sequelize } = require('sequelize')
const sequelize = new Sequelize ('Test','root','',{
    host:'localhost',
    dialect: 'mariadb'
})
const categoria = sequelize.define ('categoria',{
    //titulo = É o nome do campo tipo String dentro da tabela
    nome:{
    type: Sequelize.STRING
    },
    //conteudo= O nome do campo dentro da tabela nome do campo conteudo tipo Text
    slud : {
    type: Sequelize.STRING
    }
})
//** IMPORTANTE - Para criar o banco de dados no MySql a primeira vez */
// É preciso executar o comando categoria.sync{{force:true}}
// Ele cria e zera um banco de dados por isto é importante comentar ele novamente.
// Claro depoi pode-se criar uma rotina somente para isto em aplicação maior.

// comando para criar automático a tabela.
//--------------------------------------------
//@@@@@ categoria.sync({force:true})
// Assim que usar este comando comente //
// Ele zera o arquivo 