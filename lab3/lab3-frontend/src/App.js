import './App.css';
import axios from 'axios';

const URL = 'http://localhost:8080';

function App() {
  async function getColors() {
    const colors = await axios.get(URL + '/colors');
    console.log(colors);
  }

  return (
    <div className="App">

      <button onClick={getColors}>Get Colors</button>

    </div>
  );
}

export default App;
