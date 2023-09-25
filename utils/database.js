import mongoose from "mongoose";

// let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    // if (isConnected) {
    //     console.log('Mongo db is connected');
    //     return;
    // }

    try {
        await mongoose.connect(process.env.MONGODB_URI.toString(), {
            dbName: 'devgram',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log('Mongo db is connected');

        // isConnected = true;
    } catch (err) {
        console.log(err)
    }
}