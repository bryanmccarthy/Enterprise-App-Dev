import './App.css';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Countries from './components/Countries';

function App() {

  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Technologies />
        <Countries />
      </div>
    </div>
  );
}

export default App;
