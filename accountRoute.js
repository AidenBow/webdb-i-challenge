const express = require("express");
const router = express.Router();

const db = require('./data/dbConfig.js');

router.post("/", (req, res) => {
  db("accounts").insert({name: req.body.name, budget: req.body.budget})
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err.message})
    })
})

router.get("/", (req, res) => {
  db("accounts").select("*")
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err.message})
    })
})

router.put("/:id", (req, res) => {
  db("accounts").where( 'id', '=', req.params.id).update({name: req.body.name, budget: req.body.budget})
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err.message})
    })
})

router.delete("/:id", (req, res) => {
  db("accounts").where("id", "=", req.params.id).del()
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err.message})
    })
})

module.exports = router;