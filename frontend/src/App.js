import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {createCar, getCars,} from './services/index'
var auto = {}
/**
 * In the real world a way to identify if the car is already is maintenance will be to have a status of the reapirs; the reason I added a new value called "maintenanceStatus". Idealy the logic will be to asyncronous with this data everytime is fetched. on this example is hard coded
 * The variable cars should be commented for a complete flow once the data base is set.
 */
var cars = [ 
  { 
  "description":" change of suspension", 
  "make":"Nissan",  
  "model":"Versa", 
  "estimatedate":"2021/12/01", 
  "id":3340,
  "km":16098,
  "image":"http://3.23.108.188/cars/versa.jpg",
  "maintenanceStatus":false
  }, 
   { 
  "description":" motor adjustment", 
  "make":" Honda ", 
  "model":"CR-V", 
  "estimatedate":"2021/12/01", 
  "id":3341,
  "km":16098,
  "maintenanceStatus":false,
  "image":"http://3.23.108.188/cars/CR-V.jpg" 
  }, 
   {
  "description":" engine tuning ", 
  "make":"Honda",  
  "model":"Civic", 
  "estimatedate":"2020/20/12", 
  "id":3342, 
  "km":90000, 
  "maintenanceStatus":false,
  "image":"http://3.23.108.188/cars/civic.jpg" } , 
  { 
  "description":" oil change ", 
  "make":" Volkswaguen", 
  "model":"Tiguan",
  "estimatedate":"2020/20/12",  
  "km":13500, 
  "id":3343,
  "maintenanceStatus":false, 
  "image":"http://3.23.108.188/cars/tiguan.jpg" } , 
  { 
  "description":" change of pads ", 
  "make":" Nissan ", 
  "model":"Sentra", 
  "estimatedate":"2020/20/12", 
  "km":6000, 
  "id":3344,
  "maintenanceStatus":false, 
  "image":"http://3.23.108.188/cars/sentra.jpg" }, 
  { 
  "description":" change of pads ",  
  "make":"Volkswagen", 
  "model":"Vento", 
  "estimatedate":"2020/20/12", 
  "km":80050, 
  "id":3345,
  "maintenanceStatus":false, 
  "image":"http://3.23.108.188/cars/vento.jpg" }, 
  { 
  "description":"Change Transmission (CVT)",  
  "make":"Chevrolet", 
  "model":"Aveo NG", 
  "estimatedate":"2021/09/07", 
  "km":33460,
  "id":3346,
  "maintenanceStatus":false,
  "image":"http://3.23.108.188/cars/aveo.jpg" }, 
  { 
  "description":"Change ligths",  
  "make":"Chevrolet", 
  "model":"Spark",
  "estimatedate":"2020/20/12",  
  "km":16098, 
  "id":3347,
  "maintenanceStatus":true, 
  "image":"http://3.23.108.188/cars/spark.jpg" } 
  ]

export default function App() {

  const [allCars, setAllCars] = useState([])
  const [images, setImage] = useState()
  const [date, setDate] = useState()
  const [description, setD] = useState()
  const [km, setKm] = useState()
  const [id, setId] = useState()
  const [name, setName ] = useState()
  const [model, setModel ] = useState("")
  const [make, setMake ] = useState("")
  const [status, setStatus] = useState()

  var finalImage = images

  const renew = ()=>{
    setImage("")
    setDate("")
    setD("")
    setKm("")
    setModel("")
    setMake("")
    setId("")
    setStatus("")
  }

  const sendCar = async()=>{

    console.log("submit")  
    await createCar(description, make, model, km, id, images, name, status).then(
      res =>{
        renew()
      }
    ).catch(
      err =>{
        renew()
      }
    );
  }

  const handleModelChange = (newValue) => {

    var caro = JSON.parse(newValue)
    auto = caro
    setImage(caro.image)
    setDate(caro.estimatedate)
    setD(caro.description)
    setKm(caro.km)
    setModel(caro.model)
    setMake(caro.make)
    setId(caro.id)
    setStatus(caro.maintenanceStatus)
  }

  const handleName = (e) =>{
    setName(e)
  }

  useEffect(() => {
    const fetchData = async (setAllCars) => {
      /**
       * The get request is done in the UseEffect to obtain all the data as the component is being created for testing purposes the values are hardcoded
        const cars = await getCars();
       */
      
      setAllCars(cars)
      return true
  };
  fetchData(setAllCars);

  return 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Select a CAR for MAINTENANCE
        </a>
        <form onSubmit={sendCar}>
          <select
            onChange={(e) => handleModelChange(e.target.value)}
            className="w-full px-3 py-1 mt-1 text-lg leading-tight text-gray-700 rounded-lg appearance-none focus:outline-none"
            id="car"
            name="car"
            type="number"
          >
            <option defaultValue>Selecciona el Caro</option>
            {allCars.map((allCars, index) => {
              return <option
                value={JSON.stringify(allCars)}
                key={index}>{`Modelo: ${allCars.make}, ${allCars.model}`}
              </option>
            })}
          </select>
          <img src={finalImage}/>
          <li>Model: {`${make}, ${model}`}</li>
          <li>Description: {description}</li>
          <li>km: {km}</li>
          <li>Estimated Date: {date}</li>
          <input 
          id="name"
          name="name"
          type="text"
          placeholder="Name of individual requesting maintenance"
          label="name"
          onChange={(e) => handleName(e.target.value)}
          />
          <button
          type="submit"
          disabled={status}
          >
          {status ? 'Already in Maintenance' : 'PUT IN MAINTANCE'}
          </button>
        </form>
      </header>
    </div>
  );
}



