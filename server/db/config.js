const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect(process.env.DB_MONGOSE_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log(`Connected to MongoDB`);
    }).catch((e) => console.log(`Error connected to MongoDB!`, e));
}