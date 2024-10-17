import axios from "axios";
import { useEffect, useState } from "react";
import NewUser from "./Mongo/NewUser";
import UpdateUser from "./Mongo/UpdateUser";

function Mongo() {
  const [users, setUsers] = useState([])

  function fetchUsers(){
    axios.get("http://localhost:8000/api/getUsers")
    .then((response) => {
      console.log(response.data);
      setUsers(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchUsers()
  }, [])

  function handleDeleteUser(id){
    axios.delete(`http://localhost:8000/api/deleteUser/${id}`)
    .then(() => {
      fetchUsers()
    })
    .catch(err=>{
      console.error(err);
      
    })
  }

  const [editUser, setEditUser] = useState(null);
  return (
    <>
      <h1 className="text-center text-4xl font-bold">UserList</h1>
      <hr />
      <NewUser fetchUsers={fetchUsers} />
      {editUser && (
        <UpdateUser
          fetchUsers={fetchUsers}
          editUser={editUser}
          setEditUser={setEditUser}
        />
      )}
      <hr />
      <ul className="text-center">
        {users.map((user) => (
          <li key={user._id} className="my-1">
            {user.name} - {user.age} - {user.email} - 
            <button
              className="bg-slate-300 p-1 rounded border border-black"
              onClick={() => setEditUser(user)}
            >
              Update
            </button>
            <button
              className="bg-slate-300 p-1 rounded border border-black"
              onClick={() => handleDeleteUser(user._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Mongo;