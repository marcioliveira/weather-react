import React, { useState } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import { api } from "./services/api";

function App() {
  const [weather, setWeather] = useState(null);
  const city = "Rio de Janeiro";

  async function handleGetWeather() {
    const response = await api.get(city);
    console.log(response.data);
    setWeather(response.data);
  }

  return (
    <div className="App">
      {/* <h1>{"Hello World".toUpperCase()}</h1>*/}
      {/*<HelloWorld />*/}

      <header>
        <button onClick={handleGetWeather}>Enviar</button>
      </header>
      {weather && (
        <main>
          <p>{JSON.stringify(weather)}</p>

          <h1>{city}</h1>
          <section>
            <h2>Current Weather</h2>

            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
