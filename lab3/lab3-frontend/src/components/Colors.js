import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const URL = "http://localhost:8080";

function Colors() {
  const [colors, setColors] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  async function getColors() {
    const colors = await axios.get(URL + '/colors');
    setColors(colors.data);
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

  async function deleteColor() {
    const color = await axios.delete(URL + '/colors/256');
    console.log(color);
  }

  function setPrevPage() {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    } else {
      setCurrIndex(colors.length - 1);
    }
  }

  function setNextPage() {
    if (currIndex < colors.length - 1) {
      setCurrIndex(currIndex + 1);
    } else {
      setCurrIndex(0);
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
        {
          colors.map((color, index) => {
            if (index === currIndex) {
              return (
                <div className="Color" key={color.colorId}>
                  <div className="ColorId">{color.colorId}</div>
                  <div className="HexString">{color.hexString}</div>
                  <div className="RGB">
                    <div className="R">{color.rgb.r}</div>
                    <div className="G">{color.rgb.g}</div>
                    <div className="B">{color.rgb.b}</div>
                  </div>
                  <div className="HSL">
                    <div className="H">{color.hsl.h}</div>
                    <div className="S">{color.hsl.s}</div>
                    <div className="L">{color.hsl.l}</div>
                  </div>
                  <div className="Name">{color.name}</div>
                </div>
              );
            } else {
              return null;
            }
          }
          )
        }
      </div>

      <div className="Pagination">
        <button onClick={setPrevPage}>Previous</button>
        <button onClick={setNextPage}>Next</button>
      </div>
    </div>
  );
}

export default Colors;