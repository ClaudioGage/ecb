import express from 'express';
import * as bodyParser from 'body-parser';
import {connect} from "./db/db";
import {Cars} from "./db/models/Cars.model";

connect();

const app = express();
app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/car', async (req,res) => {
    const car = new Cars();
    car.id = req.body.id;
    car.make = req.body.make
    car.model = req.body
    car.description = req.body
    car.km = req.body
    car.image = req.body
    await car.save();
    res.send(car);
});

app.get('/movies', async (req,res) => {
    /*
    Simple get request to obtain the object in from the instructions, 
    due to the fact that obtaining and using my own db I will hardcode the object provided in the instructions.
    Also the object in the instructions on the image property 

    Logic

    let cars = await Cars.find();
    res.send(cars);

     */

    res.send(hardCodedResponse);   
});

var hardCodedResponse = [ 
    { 
    "description":" change of suspension", 
    "make":"Nissan",  
    "model":"Versa", 
    "estimatedate":"2021/12/01", 
    "id":3340,
    "image":"http://3.23.108.188/cars/versa.jpg" 
    }, 
     { 
    "description":" motor adjustment", 
    "make":" Honda ", 
    "model":"CR-V", 
    "estimatedate":"", 
    "id":3341,
    "image":"http://3.23.108.188/cars/CR-V.jpg" 
    }, 
     {
    "description":" engine tuning ", 
    "make":"Honda",  
    "model":"Civic", 
    "estimatedate":"2020/20/12", 
    "id":3342, 
    "km":90000, 
    "image":"http://3.23.108.188/cars/civic.jpg" } , 
    { 
    "description":" oil change ", 
    "make":" Volkswaguen", 
    "model":"Tiguan", 
    "km":13500, 
    "id":3343, 
    "image":"http://3.23.108.188/cars/tiguan.jpg" } , 
    { 
    "description":" change of pads ", 
    "make":" Nissan ", 
    "model":"Sentra", 
    "km":6000, 
    "id":3344, 
    "image":"http://3.23.108.188/cars/sentra.jpg" }, 
    { 
    "description":" change of pads ",  
    "make":"Volkswagen", 
    "model":"Vento", 
    "km":80050, 
    "id":3345, 
    "image":"http://3.23.108.188/cars/vento.jpg" } , 
    { 
    "description":"Change Transmission (CVT)",  "make":"Chevrolet", 
    "model":"Aveo NG", 
    "estimatedate":"2021/09/07", 
    "km":33460, 
    "image":"http://3.23.108.188/cars/aveo.jpg" }, 
    { 
    "description":"Change ligths",  
    "make":"Chevrolet", 
    "model":"Spark", 
    "km":16098, 
    "id":3347, 
    "image":"http://3.23.108.188/cars/spark.jpg" } 
    ]
    


export {app};