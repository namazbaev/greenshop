const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
require('./config/db')();
require('dotenv').config({ path: path.resolve(__dirname, './.env') })


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`PORT ishladi`))