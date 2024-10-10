import {useState} from "react";
import './joshua.css';
export default function Joshua() {

  const [username, setUsername] = useState('');
  const [userpass, setUserPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);  
    if(username == "admin" && userpass == "admin"){
      console.log("Login Success")
      window.location.href = "/jerome";
    }else{
      console.log("Login Fail")
    }
  }

  return (
    <>
      <div className="mainctn">
      
        <div className="titlectn">
          <h1>LOGIN PAGE</h1>
        </div>

        <div className="loginctn">

          <form className="formctn" onSubmit={handleSubmit}>
            <label className="nameLabel">Username </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} name="username" className="nameInput" type="text" required placeholder="Username"></input>
            <label className="passLabel">Password </label>
            <input value={userpass} onChange={(e) => setUserPass(e.target.value)} name="userpass" className="passInput" type="password" required placeholder="Password" minLength={5}></input>
            <button className="loginbtn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
