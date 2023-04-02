import { useState } from "react";
import PhoneInput from "react-phone-number-input";

import "./App.css";
export default function App() {
  const style = {
    padding: "10px",
    borderRadius: "10px",
    margin: "5px",
    width: "100px",
    border: "none",
  };
  const options = [
    { value: 1 / 3, lable: "1/3" },
    { value: 1 / 4, lable: "1/4" },
    { value: 2 / 3, lable: "2/3" },
    { value: 1 / 10, lable: "1/10" },
  ];
  const [value, setValue] = useState(1 / 3);
  const [screen, setScreen] = useState(1920);
  const [size, setSize] = useState();
  const reset = () => {
    setSize("");
  };
  let px = () => size * value;
  let vw = () => ((size - px()) / screen) * 100;

  const copy = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
  };
  return (
    <div className="App">
      <div>
        <input
          style={style}
          value={screen}
          onChange={(e) => setScreen(e.target.value)}
        />

        <input
          style={style}
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <br />
        <select onChange={(e) => setValue(e.target.value)} style={style}>
          {options.map((e) => (
            <option value={e.value}>{e.lable}</option>
          ))}
        </select>
        <button onClick={reset} style={{ ...style }}>
          Reset
        </button>
      </div>
      <div>
        <h5 className="all-copy" onClick={copy}>
          calc({Math.round(px())}px+{vw().toFixed(3)}vw)
        </h5>
        <h5 className="all-copy" onClick={copy}>
          calc({Math.round(px())}px + {vw().toFixed(3)}vw)
        </h5>
      </div>
    </div>
  );
}
