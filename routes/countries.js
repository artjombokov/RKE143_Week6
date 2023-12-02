const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countrieId', (req, res) => {
    const requestedCountrieId = req.params.countrieId;
    const countrie = data.countries.filter(countrieInData => {
        if(countrieInData.id.toString() === requestedCountrieId) {
            return countrieInData;
        }
    });

    res.status(200).json(countrie);
});

module.exports = router;