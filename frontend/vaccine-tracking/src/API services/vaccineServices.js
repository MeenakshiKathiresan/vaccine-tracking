import {URLS} from "../constants/urls"
import axios from "axios"

const getAllVaccines = (callback) =>{
    const reqUrl = URLS.baseUrl +"/vaccine"

    axios.get(reqUrl)
    .then(response => {
        if (callback) {
            callback(response.data);
          }
    })
    .catch(error => {
        console.log(error);
      });
}


const addVaccine = (vaccineData, callback) => {
    const reqUrl = URLS.baseUrl + "/vaccine/add";

    console.log(vaccineData)

    
    axios.post(reqUrl, vaccineData)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const fetchPatients = ( callback) =>{
    const reqUrl = URLS.baseUrl + "/vaccine/availablePatients";
  

    axios.get(reqUrl)
    .then(response => {
            callback(response.data);
          
    })
    .catch(error => {
        console.log(error);
      });
  }

  const addPatientEntry = (entryData, callback) =>{
      const reqUrl = URLS.baseUrl + "/vaccine/entry/add"

      axios.post(reqUrl, entryData)
      .then(response => {
        if (callback) {
            callback(response.data);
          }
      })
      .catch(error =>{
          console.log(error);
      })

  }
  

  export {addVaccine, getAllVaccines, fetchPatients, addPatientEntry}