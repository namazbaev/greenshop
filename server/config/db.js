const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect("mongodb://localhost/greenshop", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Connected to MongoDB`);
    }).catch((e) => console.log(`Error connected to MongoDB!`, e));
}