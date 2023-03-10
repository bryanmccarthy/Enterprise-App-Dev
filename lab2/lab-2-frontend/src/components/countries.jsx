import './countries.css';
import { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001';
const firstPage = 1;
const lastPage = 13;

function Countries() {
  const [countriesData, setCountriesData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

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
    flag.data.forEach(({ country, flag_base64 }) => {
      if (groupedByCountry.has(country)) {
        groupedByCountry.get(country).push(flag_base64);
      }
    });
    
    setCountriesData(Array.from(groupedByCountry.values()));
  }

  function handleToggleRows() {
    if (rowsPerPage === 20) {
      setCurrentPage(1);
      setRowsPerPage(Infinity);
    } else {
      setRowsPerPage(20);
    }
  }

  return (
    <div className="Countries">
        { showTable ?
          <div>
            <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <th className="th">Country</th>
                  <th className="th">City</th>
                  <th className="th">Continent</th>
                  <th className="th">Currency</th>
                  <th className="th">Coastline</th>
                  <th className="th">Domain</th>
                  <th className="th">Flag</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {countriesData.slice(rowsPerPage * (currentPage - 1), rowsPerPage * currentPage).map((arr) => (
                  <tr className="tr" key={arr[0]}>
                    {arr.map((value, i) => (
                      <td className="td" key={i}>{ i === 6 ? <img className="Flag" src={value} alt="no flag"></img> : value }</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="PaginationControl">
              <button style={{ visibility: currentPage === firstPage ? 'hidden' : 'visible'}} onClick={() => setCurrentPage(currentPage - 1)}>left</button>
              <button onClick={handleToggleRows}>Toggle Rows Per Page</button>
              <button style={{ visibility: currentPage === lastPage ? 'hidden' : 'visible'}} onClick={() => setCurrentPage(currentPage + 1)}>right</button>
            </div>
          </div>
          :
          <button className="GetCountriesButton" onClick={getCountriesData}>View Country Information</button>
        }
    </div>
  )
}

export default Countries;
