import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetails() {
  const { name } = useParams();

  const [data, setData] = useState(null);

  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    setData(response.data);
    console.log(response.data);
  });

  return (
    <>
      <h1 className="text-center text-5xl font-bold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      {data && (
        <>
          <div className="text-center text-xl">Height: {data.height} cm</div>
          <div className="text-center text-xl">Weight: {data.weight} kg</div>
          <img
            className="mx-auto"
            src={data.sprites.other.home.front_default}
            alt=""
          />
        </>
      )}
    </>
  );
}
