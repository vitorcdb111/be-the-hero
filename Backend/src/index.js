const express = require('express');
const cors = require('cors');
const routes  = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 * Metodos HTTP:
 * 
 * GET: Buscar uma info do back-end
 * POST: Criar uma info no back-end
 * PUT: Alterar uma info no back-end
 * DELETE: Deletar uma info no back-end
 * 
 * Tipos de parametros:
 * 
 * Query: Parametros nomeados enviados na rota apos o simbolo de "?" (filtro, paginacao)
 * Route: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 * 
 * SQLite
 * 
 * Query Builder: table('users').select('*').where()
 * 
 */

app.listen(3333);