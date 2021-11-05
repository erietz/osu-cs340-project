import { useState } from "react";
import "../App.css";

export default function AddAnotherCustomer() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="App">
      <button id="AddAnother" onClick={handleClick}>Add Another Customer</button>

      {Array.from(Array(counter)).map((c, index) => {
        return (<input key={c} type="text" placeholder="Enter Customer ID"></input>);
      })}
    </div>
  );
}