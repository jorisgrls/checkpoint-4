const axios = require("axios");

const browse = (req, res) => {
  axios
    .get("https://restcountries.com/v2/name/france")
    .then((response) => res.json(response.data))
    .catch((err) => res.secn(err));
};

module.exports = {
  browse,
};
