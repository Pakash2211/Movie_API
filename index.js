const express = require('express');
const moviesRouter = require('./routes/movies.router');


const app = express();
app.use(express.json());

app.use('/',moviesRouter);

app.listen(8090)