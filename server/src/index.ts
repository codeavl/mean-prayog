import  express, { Express, Request, Response }  from "express";

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

app.get("/", (req: Request, res: Response) => {
    res.send("hello world from server")
})

app.listen(8000, () => {
    console.log(`Server is listening on port 8000`);
})



console.log("Hello world nodemon");
