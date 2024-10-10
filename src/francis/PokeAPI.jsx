import axios from "axios";
import { useEffect, useState } from "react";

export default function PokeAPI() {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(100);

  const [element, setElement] = useState([]);
  const [selectedElement, setSelectedElement] = useState("normal");

  // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${selectedElement}`)
      .then((response) => setPokemons(response.data.pokemon));
  }, [selectedElement]);
  axios
    .get(`https://pokeapi.co/api/v2/type`)
    .then((response) => setElement(response.data.results));
  function changeNum(num) {
    setCount(num);
  }
  return (
    <>
      <div className=" w-[75%] mx-auto py-4">
        Number of Pokemon
        <input
          className="mx-3"
          type="number"
          onChange={(e) => changeNum(e.target.value)}
          value={count}
        />
        Category:
        <select
          name="type"
          id="type"
          className="mx-3"
          value={selectedElement}
          onChange={(e) => setSelectedElement(e.target.value)}
        >
          {element.map((element, index) => (
            <option value={element.name} key={index}>
              {element.name}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <ol className="list-decimal list-inside  mx-auto text-center">
        {pokemons.map((pokemon, index) => {
          if(index >= count){
            return;
          }
          return (
            <li key={index}>
              <a href={`/francis/Pokemon/${pokemon.pokemon.name}`}>{pokemon.pokemon.name}</a>
            </li>
          );
        })}
      </ol>
    </>
  );
}
