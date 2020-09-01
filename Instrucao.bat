O OBJETIVO DA APLICAÇÃO - ENSINO DE PROGRAMAÇÃO
===============================================
DIDÁTICA

Demonstrar de forma bem simples o uso do NodeJS
com o banco de dados MariaDB assim como o uso do
Bootstrap e JQuery integrado a aplicacao e uma tela.

E tambem um modelo de organizacao.

Ela funciona apartir da porta 8081

localhost:8081/admin/categorias/add

Para executar é somente aplicar no DOS o comando 

node app.js 

Nesta versão para criar o Banco de
Dados no MariaDB é importante retirar o comentário,
descomentar a linha do comando no arquivo Catetorias.js na pasta Views

categoria.sync{{force:true}}

Depois de rodar comente novamente.

Este comando cria e zera o banco de dados.

Claro, numa aplicacao maior ele fica instalado
em um módulo de instalação com este objetivo de
gerar e instalar o banco de dados e suas tabelas.

A proposta aqui não é neste nivel mas sim demonstrar
a conexão usando o sequelize do express.

Não esquecer de ativar o XAMP

William Silva
Agosto, 31, 2020 
