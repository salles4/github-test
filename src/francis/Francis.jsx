import axios from "axios";
import { useState, useEffect } from "react";

export default function Francis() {
  const [jokes, setJokes] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get(`https://v2.jokeapi.dev/joke/Any?amount=${count}`)
      .then((response) =>
      {
        count != 1 ? setJokes(response.data.jokes) : setJokes([response.data])
        console.log(jokes)
      }
      );
  }, [count]);

  function changeNum(num) {
    num != undefined && setCount(num);
  }
  return (
    <>
      Number of Joke
      <input
        type="number"
        onChange={(e) => changeNum(e.target.value)}
        value={count}
      />
      <button>Get Joke</button>
      <ol className="list-decimal list-inside">
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
