import './Colors.scss';
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const URL = "http://localhost:8080";

function Colors() {
  const [colors, setColors] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [colorId, setColorId] = useState(0);
  const [hexString, setHexString] = useState("");
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [hsl, setHsl] = useState({ h: 0, s: 0, l: 0 });
  const [name, setName] = useState("");

  async function getColors() {
    const colors = await axios.get(URL + '/colors');
    setColors(colors.data);
    setColorId(colors.data[0].colorId);
    setHexString(colors.data[0].hexString);
    setRgb(colors.data[0].rgb);
    setHsl(colors.data[0].hsl);
    setName(colors.data[0].name);
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
    const id = colors[currIndex].colorId;

    const res = await axios.put(URL + `/colors/:${id}`, {
      hexString: hexString,
      rgb: rgb,
      hsl: hsl,
      name: name
    });
    
    if (res.status === 200) {
      setColors(colors.map((color) => color.colorId === id ? res.data : color));
    } else {
      console.log(res);
    }
  }

  async function deleteColor() {
    const id = colors[currIndex].colorId;
    console.log(id);
    console.log(colors[currIndex].name)

    const res = await axios.delete(URL + `/colors/${id}`);

    if (res.status === 200) {
      setColors(colors.filter((color) => color.colorId !== id));
      if(currIndex !== 0) {
        setCurrIndex(currIndex - 1)
      } else {
        setCurrIndex(0);
      }
    } else {
      console.log(res);
    }
  }

  function setPrevPage() {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
      setColorId(colors[currIndex - 1].colorId);
      setHexString(colors[currIndex - 1].hexString);
      setRgb(colors[currIndex - 1].rgb);
      setHsl(colors[currIndex - 1].hsl);
      setName(colors[currIndex - 1].name);
    }
  }

  function setNextPage() {
    if (currIndex < colors.length - 1) {
      setCurrIndex(currIndex + 1);
      setColorId(colors[currIndex + 1].colorId);
      setHexString(colors[currIndex + 1].hexString);
      setRgb(colors[currIndex + 1].rgb);
      setHsl(colors[currIndex + 1].hsl);
      setName(colors[currIndex + 1].name);
    }
  }

  const { status } = useQuery('colors', getColors);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error fetching data</div>;

  return (
    <div className="Colors">
      <h1>Colors</h1>

      <div className="Options">
        <button onClick={createColor}>Create Color</button>
        <button onClick={updateColor}>Update Color</button>
        <button onClick={deleteColor}>Delete Color</button>
      </div>

      <div className="ColorList">
        <div className="Color">
          <label>ID: {colorId}</label>
          <label>hexString</label><input value={hexString} onChange={(e) => setHexString(e.target.value)}></input>
          <div className="RGB">
            <label>R</label><input value={rgb.r} onChange={(e) => setRgb({...rgb, r: e.target.value})}></input>
            <label>G</label><input value={rgb.g} onChange={(e) => setRgb({...rgb, g: e.target.value})}></input>
            <label>B</label><input value={rgb.b} onChange={(e) => setRgb({...rgb, b: e.target.value})}></input>
          </div>
          <div className="HSL">
            <label>H</label><input value={hsl.h} onChange={(e) => setHsl({...hsl, h: e.target.value})}></input>
            <label>S</label><input value={hsl.s} onChange={(e) => setHsl({...hsl, s: e.target.value})}></input>
            <label>L</label><input value={hsl.l} onChange={(e) => setHsl({...hsl, l: e.target.value})}></input>
          </div>
          <label>name</label><input value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
      </div>

      <div className="Pagination">
        <button disabled={currIndex === 0 ? true : false} onClick={setPrevPage}>Prev</button>
        <button disabled={currIndex === colors.length - 1 ? true : false} onClick={setNextPage}>Next</button>
      </div>
    </div>
  );
}

export default Colors;