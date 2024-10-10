import { Link } from "react-router-dom";

export default function Header(){
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center border-b-2 text-center mt-4">
        <div>
          <h1 className="font-bold text-5xl">Integrative Programming</h1>
          <small>https://github.com/salles4/github-test</small>
        </div>
        <div className="flex justify-center gap-12">
          <Link to="/francis">Francis</Link>
          <Link to="/jerome">Jerome</Link>
          <Link to="/joshua">Joshua</Link>
          <Link to="/stephanie">Stephanie</Link>
        </div>
      </div>
    </>
  );
}