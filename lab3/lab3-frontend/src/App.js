import './App.css';
import axios from 'axios';

const URL = 'http://localhost:8080';

function App() {
  async function getColors() {
    const colors = await axios.get(URL + '/colors');
    console.log(colors);
  }

  async function createColor() {
    const color = await axios.post(URL + '/colors', {
      hexString: "#FF0000",
      rgb: {
        r: 255,
        g: 0,
        b: 0
      },
      hsl: {
        h: 0,
        s: 100,
        l: 50
      },
      name: "Red"
    });
    console.log(color);
  }

  async function updateColor() {
    const color = await axios.put(URL + '/colors/256', {
      hexString: "#00FF00",
      rgb: {
        r: 0,
        g: 255,
        b: 0
      },
      hsl: {
        h: 120,
        s: 100,
        l: 50
      },
      name: "Green"
    });
    console.log(color);
  }

  return (
    <div className="App">

      <button onClick={getColors}>Get Colors</button>
      <button onClick={createColor}>Create Color</button>
      <button onClick={updateColor}>Update Color</button>

    </div>
  );
}

export default App;
