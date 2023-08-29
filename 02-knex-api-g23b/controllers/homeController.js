/* Los controladores tienen la lógica de negocio */
const ModelHomes = require('../models/Homes')

const createHome = (req, res) => {
  ModelHomes.create(req.body)
    .then((row) => {
      res.status(201).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findAllHomes = (req, res) => {
  ModelHomes.findAll()
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const findOneHome = (req, res) => {
  ModelHomes.findOne(req.params.idHome)
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const updateOneHome = (req, res) => {
  ModelHomes.update(req.params.idHome, req.body)
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome
}
