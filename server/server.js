const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const { setMongo } = require('./connection/connect');
const {setRoutes}=require('./routes');
// Config File
dotEnv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const main = async () => {
    try {
        await setMongo();
        setRoutes(app);
        app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    }catch(err) {
        console.log(err);
    }
}

main();
