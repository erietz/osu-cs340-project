import { useState } from "react";
import "../App.css";

export default function AddAnotherProduct() {
  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="App">
      <button id="AddAnother" onClick={handleClick}>Add Another Product</button>

      {Array.from(Array(counter)).map((c, index) => {
        return (<input key={c} type="text" placeholder="Enter Product ID"></input>);
      })}
    </div>
  );
}
