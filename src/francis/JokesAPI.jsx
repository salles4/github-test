import axios from "axios";
import { useState, useEffect } from "react";

export default function JokesAPI() {
  const [jokes, setJokes] = useState([]);
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState("Any");
  useEffect(() => {
    if (count != "" && count != 0) {
      axios
        .get(`https://v2.jokeapi.dev/joke/${category}?amount=${count}`)
        .then((response) => {
          count != 1
            ? setJokes(response.data.jokes)
            : setJokes([response.data]);
        });
    }
  }, [count, category]);

  function changeNum(num) {
    setCount(num);
    setJokes([]);
  }
  return (
    <>
      <div className=" w-[75%] mx-auto py-4">
        Number of Joke
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Any">Any</option>
          <option value="Programming">Programming</option>
          <option value="Misc">Misc</option>
          <option value="Dark">Dark</option>
          <option value="Pun">Pun</option>
          <option value="Spooky">Spooky</option>
          <option value="Christmas">Christmas</option>
        </select>
      </div>
      <hr className="my-2" />
      <ol className="list-decimal list-inside w-[75%] mx-auto">
        {jokes.map((data, index) => (
          <li className="text-black" key={index}>
            {data.type == "twopart"
              ? `${data.setup}, ${data.delivery}`
              : data.joke}
          </li>
        ))}
      </ol>
    </>
  );
}
