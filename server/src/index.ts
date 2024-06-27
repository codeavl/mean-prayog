import  express, { Express }  from "express";
import http from 'http';
import mongoose from "mongoose";

const CONNECTION_STRING: string = 'mongodb+srv://codeavl:codeavl@atlascluster.hkfwb5r.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';

const products = [
    {
        "id": "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
        "name": "Laptop",
        "price": 400,
        "quantity": 4,
        "active": false
    },
    {
        "id": "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
        "name": "Keyboard",
        "price": 29.99,
        "quantity": 10,
        "active": true
    },
    {
        "id": "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
        "name": "Computer",
        "price": 700,
        "quantity": 1,
        "active": true
    }  
];

const app: Express = express();

app.use(express.json());

// const server = http.createServer(app);

// server.listen(8000, () => {
//     console.log("server running on http://localhost:8000/");
// })

app.listen(8000, () => {
    console.log("server running on http://localhost:8000/");
})

mongoose.Promise = Promise;
mongoose.connect(CONNECTION_STRING);

mongoose.connection.on('error', (error: Error) => {
    console.log("Mongoose connecton error: ",error);
});

app.use('/users', require('./routes/user.route'));



console.log("Hello world nodemon");
