import JokesAPI from "./JokesAPI";
import PokeAPI from "./PokeAPI";
import { Routes, Route, NavLink } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

export default function Francis() {
  return (
    <>
      <div className="flex justify-center gap-12 my-2">
        <NavLink to="/francis/Joke">JokesAPI</NavLink>
        <NavLink to="/francis/Pokemon">PokeAPI</NavLink>
      </div>
      <hr className="my-2"/>
      <Routes>
        <Route path="" element={<></>} />
        <Route path="/Joke" element={<JokesAPI />} />
        <Route path="/Pokemon" element={<PokeAPI />} />
        <Route path="/Pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}
