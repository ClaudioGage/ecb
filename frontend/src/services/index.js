import axios from 'axios';

const headers = {
    'X-GeoPosition': `cdmx`,
    'X-CallerIP': '1.1.1.1',
    'Content-Type': 'application/x-www-form-urlencoded',
  };

//Base Url used for making requests, in this case it points to the backend API in the project.

var baseURL = "https://localhost:5000/"

export const api = axios.create({ baseURL, timeout: 30000, headers });

 export const getCars = async () =>{

    return await api({
        url: `getcars`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
 }

 export const createCar = async (description, make, model, km, id, image, name, status) =>{

    const data = {
        description, 
        make, 
        model, 
        km, 
        id, 
        image,
        name,
        status
      }

    return await api({
        url: `createcars`,
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      })

 }

 export default {
     getCars,
     createCar
 }

