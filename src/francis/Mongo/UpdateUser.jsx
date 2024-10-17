import axios from "axios";
import { useState } from "react";

function UpdateUser({ fetchUsers, editUser, setEditUser }) {
  function handleUpdateUser(id) {
    console.log(editUser);

    axios.put(`http://localhost:8000/api/updateUser/${id}`, editUser)
      .then(() => {
        fetchUsers();
        setEditUser(null);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="createUser flex justify-center items-center flex-col">
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="Name"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="Age">Age:</label>

          <input
            type="number"
            name="Age"
            value={editUser.age}
            onChange={(e) => setEditUser({ ...editUser, age: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="Email"
            value={editUser.email}
            onChange={(e) =>
              setEditUser({ ...editUser, email: e.target.value })
            }
          />
        </div>
        <button
          className="bg-slate-300 p-1 rounded border border-black"
          onClick={() => handleUpdateUser(editUser._id)}
        >
          Update User
        </button>
        <button
          className="bg-slate-300 p-1 rounded border border-black"
          onClick={() => setEditUser(null)}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default UpdateUser;
