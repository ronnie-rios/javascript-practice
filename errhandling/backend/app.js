const express = require('express');
const cors = require('cors');
const app = express();

const port = 9009;

app.use(cors());

const datacontroller = require('./controller/datacontroller');
app.use('/data', datacontroller);

app.get('/',(req,res) => {
    res.json({ msg: 'backend'})
});

app.use((req, res) => {
    res.json({ err: 'not found'})
});

app.listen(port, () => {
    console.log(`port up on ${port}`)
});