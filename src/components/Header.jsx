import { NavLink } from "react-router-dom";

export default function Header(){
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center border-b-2 text-center mt-4">
        <div>
          <h1 className="font-bold text-5xl">Integrative Programming</h1>
          <small>https://github.com/salles4/github-test</small>
        </div>
        <div className="flex justify-center gap-12">
          <NavLink to="/francis">Francis</NavLink>
          <NavLink to="/jerome">Jerome</NavLink>
          <NavLink to="/joshua">Joshua</NavLink>
          <NavLink to="/stephanie">Stephanie</NavLink>
        </div>
      </div>
    </>
  );
}