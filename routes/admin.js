const express = require('express')
const router = express.Router()
//// Definindo as rotas
//---- Rota principal para o painel Admin.js

router.get('/', (req, res) => {
    res.render("../views/layout/admin/index")
});

router.get('/posts', (req, res) => {
    res.send("Pagina de post!")
});    
router.get('/categorias',(req, res) => {
    res.render("../views/layout/admin/categorias")
});
router.get('/categorias/add',(req, res) => {
    res.render("../views/layout/admin/addcategorias")
});


module.exports = router
