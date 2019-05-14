var express = require('express');
var router = express.Router();
var url = require('../controllers/url');
var question = require('../controllers/question');

// crear una url
router.post('/create_url', url.createUrl);
//obtener una url por id
router.get('/:id/url', url.detailsUrl);
//obtener una lista de urls
router.get('/urls', url.allUrl);

//todas las preguntas y urls
router.get('/mainData', url.mainData, question.allQuestion);
//Editar una url
router.put('/:id/update_url', url.updateUrl);
//eliminar una url
router.delete('/:id/delete_url', url.deleteUrl);

module.exports = router;
