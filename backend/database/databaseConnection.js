const mongoose = require('mongoose');

module.exports = connectDatabase = ()=>{
    mongoose.connect(process.env.DATABASE_URI).then(con=>{
        console.log(`MongoDB connected with ${con.connection.host} : ${con.connection.port}`);
    })
}