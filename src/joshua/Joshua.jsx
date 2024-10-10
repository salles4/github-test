import './joshua.css';
export default function Joshua() {
  return (
    <>
      <div class="mainctn">
      
        <div class="titlectn">
          <h1>LOGIN PAGE</h1>
        </div>

        <div class="loginctn">
    
          <label class="nameLabel">Username </label>
          <input class="nameInput" type="text" required placeholder="Username" name="username"></input>
          <label class="passLabel">Password </label>
          <input class="passInput" type="password" required placeholder="Password" name="userpass"></input>
          <button class="loginbtn">Login</button>
            
        </div>
      </div>
    </>
  );
}
