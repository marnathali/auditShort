var express = require('express');
var router = express.Router();
var question = require("../controllers/question");

// crear una pregunta
router.post('/create_question', question.createQuestion);
//obtener una pregunta por id
router.get('/:id/question', question.detailsQuestion);
//obtener una lista de preguntas
router.get('/questions', question.allQuestion);
//Editar una pregunta
router.put('/:id/update_question', question.updateQuestion);
//eliminar una pregunta
router.delete('/:id/delete_question', question.deleteQuestion);

module.exports = router;
