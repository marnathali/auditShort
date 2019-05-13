var Url = require('../models/url');



exports.createUrl = function(req, res) {
  var url = new Url({
    urlcontent: req.body.urlcontent,
    status: req.body.status,
    preguntas: req.body.preguntas
});

  url.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('url created')
    console.log(url);
  })
};

exports.detailsUrl = (req, res) => {
  let objId = req.params.id;
  url.findById(partId, (err, url) =>{
    if (err) return res.status(500).send({message: `Ups, ocurrio un problema ${url}`});
    if(!url) return res.status(404).send({message: `Not found ${url}`});
    res.send(url);
  })
};

exports.allUrl = (req, res) => {

  url.find({}, (err, urls) =>{
    if (err) return res.status(500).send({message: `Ocurrio un problema`});
    if(!urls) return res.status(404).send({message: `Not found`});
    //res.send(urls);
    res.render("../views/pages/report",
      {  layout: '../views/layouts/main',
         title: 'Report',
         urls: urls
      }
    );
  })
};

exports.updateUrl = (req, res) =>{
  let objId = req.params.id;
  let updated = req.body;

  url.findOneAndUpdate(objId, updated, (err, url) => {
    if (err) return res.status(500).send({message: `No se actualizo  ${url}`});

    res.send(url);
  });
};

exports.deleteUrl = (req, res)=> {
  let objId = req.params.id;

  url.findOneAndDelete(objId, (err,  url) =>{
    if (err) return res.status(500).send({message: `No se elimino ${url}`});
    if(!participante) return res.status(404).send({message: `No encontrado${url}`});
    res.send('Eliminado la url');
  })
};