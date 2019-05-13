var express = require('express');
var router = express.Router();
var Question = require('../models/question');




//=========ROUTES RENDER==================


/* GET users Login.*/
router.get('/login', function(req, res, next) {

  res.render('pages/login', { layout: 'layouts/users',
                              extractScripts: true,
                              extractStyles: true,
                              title: 'Login Users'
                            });
});



//Main view
router.get('/audit', function(req, res, next) {
  Question.find({}, (err, questions) =>{
    if (err) return res.status(500).send({message: `Ocurrio un problema`});
    if(!questions) return res.status(404).send({message: `Not found`});
    //res.send(questions);
    res.render("pages/main",
      { extractScripts: true,
        extractStyles: true,
        title: 'Audit Products',
        questions: questions
      }
    );
  })


});

/* GET report url.*/
router.get('/report', function(req, res, next) {

  res.render('pages/report', {extractScripts: true,
                               extractStyles: true,
                               title: 'Report AuditProduct'
                            });
});


module.exports = router;
