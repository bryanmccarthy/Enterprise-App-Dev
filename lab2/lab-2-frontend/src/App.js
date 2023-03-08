import './App.css';
import axios from 'axios';

function App() {

  async function getCountriesByCapital() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-capital-city.json');
    console.log(res.data);
  }

  async function getCountriesByContinent() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-continent.json');
    console.log(res.data);
  }

  async function getCountriesByCostline() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-costline.json');
    console.log(res.data);
  }

  async function getCountriesByCurrencyName() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-currency-name.json');
    console.log(res.data);
  }
  
  async function getCountriesByCurrencyName() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-currency-name.json');
    console.log(res.data);
  }

  async function getCountriesByDomainTld() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-domain-tld.json');
    console.log(res.data);
  }

  async function getCountriesByFlag() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-flag.json');
    console.log(res.data);
  }

  return (
    <div className="App">
        <button onClick={getCountriesByCapital}>Get countries by capital</button>
        <button onClick={getCountriesByContinent}>Get countries by continent</button>
        <button onClick={getCountriesByCostline}>Get countries by costline</button>
        <button onClick={getCountriesByCurrencyName}>Get countries by currency name</button>
        <button onClick={getCountriesByDomainTld}>Get countries by domain tld</button>
        <button onClick={getCountriesByFlag}>Get countries by flag</button>
    </div>
  );
}

export default App;
