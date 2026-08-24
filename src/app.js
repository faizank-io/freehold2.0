const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const apiRoutes = require('./routes/index');

const app = express();

app.use(cors(), helmet(), morgan('dev'), express.json());
app.use('/api/v1/', apiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;