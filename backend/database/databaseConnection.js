import mongoose from 'mongoose';

const connectDatabase = ()=>{
    mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DATABASE_NAME}`).then(con=>{
        console.log(`MongoDB connected with ${con.connection.host} : ${con.connection.port}`);
    }).catch(err=>{
        console.log(err);
        process.exit(1);
    });
}

export {connectDatabase};