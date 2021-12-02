import { useState } from "react";
import "../App.css";

export default function AddAnotherProduct({productIDs, setProductIDs}) {
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
        return (
            <input
                key={index}
                type="text"
                name={`productIDs[][${index}]`}
                onChange={e => setProductIDs([...productIDs, e.target.value])}
                placeholder="Enter Product ID"
            ></input>
        );
      })}
    </div>
  );
}
