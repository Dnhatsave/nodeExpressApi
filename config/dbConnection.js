const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connection established:" ,
         conect.connection.host,
         conect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDb;