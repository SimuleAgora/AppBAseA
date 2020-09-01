const db = require ("./db")

const Post = db.sequelize.define ('postagens', {
titulo: {
    type: db.Sequelize.STRING
},
conteudo: {
    type: db.Sequelize.TEXT
}
})
//Post.sync({force:true}) Ele recria a tabela e apaga tudo que tem lá. Zera a tabela.

module.exports=Post