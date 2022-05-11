const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const authRoute = require('./routes/auth');
const privateRoute = require('./routes/private');
const errorrHandler = require('./middleware/error');
const app = express();
require('./config/db')();
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
dotenv.config()
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/private', privateRoute);

/* Error handler */
app.use(errorrHandler);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`PORT ishladi`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})