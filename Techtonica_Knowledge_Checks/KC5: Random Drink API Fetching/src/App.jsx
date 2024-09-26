import { useState } from "react";
import "./App.css";
import RandomDrink from "./components/RandomDrink";

export default function App() {
  const [drink, setDrink] = useState("");
  const [instruction, setInstruction] = useState("");

  async function fetchData() {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const getDrink = await response.json();

    setDrink(getDrink.drinks[0].strDrink);
    //console.log(getDrinks.drinks[0].strDrink);

    setInstruction(getDrink.drinks[0].strInstructions);
  }

  return (
    <div className="App">
      <h1 id="t1">Hello Techtonica</h1>
      <h2 id="t2">Click the button to see an idea for a drink!</h2>
      <div>
        <button id="button" type="submit" onClick={fetchData}>
          Find a new drink
        </button>

        <RandomDrink name={drink} instructions={instruction} />
      </div>
    </div>
  );
}
