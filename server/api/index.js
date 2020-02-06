/* eslint-disable no-restricted-syntax */
const express = require('express');
const axios = require('axios');
const serviceArray = require('./services');

const router = express.Router();

for (const service of serviceArray) {
  const { entry, output, url } = service;

  router.get(`${entry}/:productId`, (req, res) => {
    const { productId } = req.params;

    axios.get(`${url}${output}/${productId}`)
      .then((response) => res.send(response.data))
      .catch((err) => res.status(404).send(err));
  });
}

module.exports = router;
