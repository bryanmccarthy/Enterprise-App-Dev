import './App.css';
import Technologies from './components/technologies';
import axios from 'axios';

function App() {

  async function getCountriesData() {
    const capital = await axios.get('http://localhost:3001/country-objects/country-by-capital-city.json');
    const continent = await axios.get('http://localhost:3001/country-objects/country-by-continent.json');
    const costline = await axios.get('http://localhost:3001/country-objects/country-by-costline.json');
    const currency = await axios.get('http://localhost:3001/country-objects/country-by-currency-name.json');
    const domain = await axios.get('http://localhost:3001/country-objects/country-by-domain-tld.json');
    const flag = await axios.get('http://localhost:3001/country-objects/country-by-flag.json');
    console.log(capital.data);
    console.log(continent.data);
    console.log(costline.data);
    console.log(currency.data);
    console.log(domain.data);
    console.log(flag.data);
  }

  return (
    <div className="App">
      <div className="Container">
        <Technologies />

        <button onClick={getCountriesData}>View Country Information</button>
      </div>
    </div>
  );
}

export default App;
