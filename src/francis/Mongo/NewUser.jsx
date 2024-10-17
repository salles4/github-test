import axios from "axios";
import { useState } from "react";


function NewUser({fetchUsers}) {
  const [newUser, setNewUser] = useState({ name: "", age: "", email: "" });
  

  function createHandleUser(){
    axios.post("http://localhost:8000/api/createUser", newUser)
    .then(() => {
      fetchUsers();
      setNewUser({name: "", age: "", email:""});
    })
    .catch(error => console.error(error)
    )
  }

  return (
    <>
    <div className="createUser flex justify-center items-center flex-col">
      <div>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Age">Age:</label>

        <input
          type="number"
          name="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </div>
      <button onClick={createHandleUser}>Create User</button>
    </div>

    </>
  );
}

export default NewUser;
