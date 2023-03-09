import './countries.css';
import { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001'

function Countries() {
  const [countriesData, setCountriesData] = useState([]);

  async function getCountriesData() {
    const capital = await axios.get(URL + '/country-objects/country-by-capital-city.json');
    const continent = await axios.get(URL + '/country-objects/country-by-continent.json');
    const costline = await axios.get(URL + '/country-objects/country-by-costline.json');
    const currency_name = await axios.get(URL + '/country-objects/country-by-currency-name.json');
    const domain = await axios.get(URL + '/country-objects/country-by-domain-tld.json');
    const flag = await axios.get(URL + '/country-objects/country-by-flag.json');
    
    const mergedData = mergeData(capital.data, continent.data, costline.data, currency_name.data, domain.data, flag.data);
    console.log(mergedData);
  }

  // Merge every country array
  function mergeData(capital, continent, costline, currency_name, domain, flag) {
    const merged = {};

    // Iterates over each array and their objects and adds them to merged using country as key
    [capital, continent, costline, currency_name, domain, flag].forEach((array) => {
      array.forEach((obj) => {
        const country = obj.country;
        // If the country doesn't exist in merged yet, add it
        if (!merged[country]) merged[country] = [];
        merged[country].push(obj);
      })
    });
    
    return(Object.values(merged)); // Return the object as an array
  }

  return (
    <div className="Countries">
        <button onClick={getCountriesData}>View Country Information</button>
    </div>
  )
}

export default Countries;
