import './App.css';
import axios from 'axios';

function App() {

  async function getCountriesByCapital() {
    const res = await axios.get('http://localhost:3001/country-objects/country-by-capital-city.json');
    console.log(res.data);
  }

  return (
    <div className="App">
        <button onClick={getCountriesByCapital}>Get countries by capital</button>
    </div>
  );
}

export default App;
