const express = require("express");
const router = express.Router();
const data1 = require("../config/data.json");
const axios = require("axios");

router.get("/pokemon", (req, res) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(result => res.send(result.data["results"]))
    .catch(err => res.send(data1));
});

module.exports = router;
