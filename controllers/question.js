var Question = require('../models/question');

var questionController = {};

questionController.createQuestion = function(req, res) {
  var question = new Question({
    question: req.body.question,
    tipo: req.body.tipo
});

  question.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('question created')
    console.log(question);
  })
};

questionController.detailsQuestion = (req, res) => {
  let objId = req.params.id;
  Question.findById(partId, (err, question) =>{
    if (err) return res.status(500).send({message: `Ups, ocurrio un problema ${question}`});
    if(!question) return res.status(404).send({message: `Not found ${question}`});
    res.send(question);
  })
};

questionController.allQuestion = (req, res) => {

  Question.find({}, (err, questions) =>{
    if (err) return res.status(500).send({message: `Ocurrio un problema`});
    if(!questions) return res.status(404).send({message: `Not found`});
    res.send(questions);

  })
};

questionController.updateQuestion = (req, res) =>{
  let objId = req.params.id;
  let updated = req.body;

  Question.findOneAndUpdate(objId, updated, (err, question) => {
    if (err) return res.status(500).send({message: `No se actualizo  ${question}`});

    res.send(question);
  });
};

questionController.deleteQuestion = (req, res)=> {
  let objId = req.params.id;

  Question.findOneAndDelete(objId, (err,  question) =>{
    if (err) return res.status(500).send({message: `No se elimino ${question}`});
    if(!participante) return res.status(404).send({message: `No encontrado${question}`});
    res.send('Eliminado la Question');
  })
};

module.exports = questionController;
