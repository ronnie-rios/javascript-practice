const express = require('express');
const router = express.Router();
const data = require('../data/data');

router.get('/', (req, res) => {
    res.json(data)
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const foundData = data.filter(item => item.id == id);
    if (foundData < 1) {
        res.json({ err: 'not found' })
    } else {
        res.json(foundData[0])
    }
});

module.exports = router;
