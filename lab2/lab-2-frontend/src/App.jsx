import './App.css';
import Technologies from './components/technologies';
import Countries from './components/countries';

function App() {

  return (
    <div className="App">
      <div className="Container">
        <div className="Header">Country Data</div>
        <Technologies />
        <Countries />
      </div>
    </div>
  );
}

export default App;
