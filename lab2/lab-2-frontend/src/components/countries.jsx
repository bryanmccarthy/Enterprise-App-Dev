import './countries.css';
import { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001'

function Countries() {
  const [countriesData, setCountriesData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  async function getCountriesData() {
    const capital = await axios.get(URL + '/country-objects/country-by-capital-city.json');
    const continent = await axios.get(URL + '/country-objects/country-by-continent.json');
    const costline = await axios.get(URL + '/country-objects/country-by-costline.json');
    const currency_name = await axios.get(URL + '/country-objects/country-by-currency-name.json');
    const domain = await axios.get(URL + '/country-objects/country-by-domain-tld.json');
    const flag = await axios.get(URL + '/country-objects/country-by-flag.json');
    
    setShowTable(true); 
    const groupedByCountry = new Map();
    
    capital.data.forEach(({ country, city }) => {
      if (!groupedByCountry.has(country)) {
        groupedByCountry.set(country, [country, city]);
      }
    });
    continent.data.forEach(({ country, continent }) => {
      if (groupedByCountry.has(country)) {
        groupedByCountry.get(country).push(continent);
      }
    });
    currency_name.data.forEach(({ country, currency_name }) => {
      if (groupedByCountry.has(country)) {
        groupedByCountry.get(country).push(currency_name);
      }
    });
    costline.data.forEach(({ country, costline }) => {
      if (groupedByCountry.has(country)) {
        groupedByCountry.get(country).push(costline);
      }
    });
    domain.data.forEach(({ country, tld }) => {
      if (groupedByCountry.has(country)) {
        groupedByCountry.get(country).push(tld);
      }
    });
    // flag.data.forEach(({ country, flag_base64 }) => {
    //   if (groupedByCountry.has(country)) {
    //     groupedByCountry.get(country).push(flag_base64);
    //   }
    // });
    
    console.log(Array.from(groupedByCountry.values()))
    setCountriesData(Array.from(groupedByCountry.values()));
  }

  return (
    <div className="Countries">
        { showTable ?
          <div>
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>City</th>
                  <th>Continent</th>
                  <th>Currency</th>
                  <th>Costline</th>
                  <th>Domain</th>
                </tr>
              </thead>
              <tbody>
                {countriesData.map((arr) => (
                  <tr key={arr[0]}>
                    {arr.map((value) => (
                      <td>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          :
          <button onClick={getCountriesData}>View Country Information</button>
        }
    </div>
  )
}

export default Countries;
