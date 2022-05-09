const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
require('./db/config')();
const app = express();
const port = process.env.PORT;
app.listen(port, () => console.log(`PORT ishladi`))