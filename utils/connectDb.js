// CONNECTING TO DATABASE

import mongoose from "mongoose"
import { DEFAULT_ECDH_CURVE } from "tls";
const connection = {}

async function connectDb() {
    // to use new database connection
    // provide options, deprecation warnings 
    if (connection.isConnected) {
        // using existing database connection
        console.log("Using existing connection")
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("DB connected")
    connection.isConnected = db.connections[0].readyState;
}

export default connectDb;