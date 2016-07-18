const express = require('express');
const http = require('http');
const router = require('./backend/router');

const port = process.env.PORT || 8000;
const app = express(http);

app.use(router);

app.listen(8000);
console.log(`Ready for business on port ${port}`);
