/////////////////////////////////
//// Criando uma nova tabela ////
/////////mariaDB/////////////////
////Rotina para inicializar o aplicativo do zero.///////

//Fazendo a Conexão com o Banco de Dados
const Sequelize = require ('sequelize')
//const { sequelize } = require('sequelize')
const sequelize = new Sequelize ('Test','root','',{
    host:'localhost',
    dialect: 'mariadb'
})
//@@@@ Define e a file decription Models DataSet
// postagem É o nome da tabela dentro da Base de Dados
const postagem = sequelize.define ('postagem',{
    //titulo = É o nome do campo tipo String dentro da tabela
    titulo:{
    type: Sequelize.STRING
    },
    //conteudo= O nome do campo dentro da tabela nome do campo conteudo tipo Text
    conteudo : {
    type: Sequelize.TEXT
    }
})
//*******************************************/
//****** Gerando DADOS PARA TESTE A PARTIR DO PROGRAMA */
postagem.create ({
    titulo: "TITULO QUALQUER PARA TESTE do DB",
    conteudo : "conteudo qualquer para teste"
})
postagem.create ({
    titulo: "TITULO QUALQUER PARA TESTE UM do DB",
    conteudo : "conteudo qualquer para teste"
})
postagem.create ({
    titulo: "TITULO QUALQUER PARA TESTE DOISJDLJDLJDLJLJD do DB",
    conteudo : "conteudo qualquer para teste"
})
//@@ Arquivo usuarios @@@@@@@@@@@@@@@ 
const usuarios = sequelize.define ('usuarios',{
    //nome= nome do campo tipo String
    nome:{
    type: Sequelize.STRING
    },
    //sobrenome= nome do campo conteudo tipo Text
    sobrenome : {
    type: Sequelize.STRING
    },
    //idade= nome do campo conteudo tipo Text
    idade : {
        type: Sequelize.INTEGER
        },
        //email= nome do campo conteudo tipo Text
    email : {
        type: Sequelize.STRING
        }
})
//*******************************************/
//****** Gerando DADOS PARA TESTE A PARTIR DO PROGRAMA */
usuarios.create ({
    nome: "WILLIAM",
    sobrenome : "SILVA",
    idade : 59,
    email : "william.simuleagora@gmail.com"
})
//A linha de baixo cria a tabela e os campos. Ela deve apagada comentada depois de usada
// Se deixar ela, ela recria a table apagando tudo
// o comando é:
// nome-do-arquivo.sync({force:true})
// cuidado com letras maiuscula miniscula - case sensive
//@@@ comando para criar automático a tabela.
//--------------------------------------------
//usuarios.sync({force:true})
// Assim que usar este comando comente //
// Ele zera o arquivo 