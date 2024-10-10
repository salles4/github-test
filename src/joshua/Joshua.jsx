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
    }else{
      console.log("Login Fail")
    }
  }

  return (
    <>
      <div class="mainctn">
      
        <div class="titlectn">
          <h1>LOGIN PAGE</h1>
        </div>

        <div class="loginctn">

          <form class="formctn" onSubmit={handleSubmit}>
            <label class="nameLabel">Username </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} name="username" class="nameInput" type="text" required placeholder="Username"></input>
            <label class="passLabel">Password </label>
            <input value={userpass} onChange={(e) => setUserPass(e.target.value)} name="userpass" class="passInput" type="password" required placeholder="Password" minLength={5}></input>
            <button class="loginbtn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
