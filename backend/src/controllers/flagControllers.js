const axios = require("axios");

const browse = (req, res) => {
  axios
    .get(`https://restcountries.com/v2/name/${req.params.id}`)
    .then((response) => res.json(response.data))
    .catch(() => res.json([]));
};

module.exports = {
  browse,
};
