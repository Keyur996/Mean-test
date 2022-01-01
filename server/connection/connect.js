const mongoose = require('mongoose');

const setMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || '');
        console.log("Database Connected..");
    } catch(err) {
        console.log(err);
    }
}

module.exports = { 'setMongo': setMongo };