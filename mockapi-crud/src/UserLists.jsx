import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "./api";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers(); // Refresh list
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Link to="/adduser">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add User</button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full mb-2" />
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <div className="mt-4 flex gap-2">
              <Link to={`/edituser/${user.id}`}>
                <button className="bg-black text-white px-3 py-1 rounded">Edit</button>
              </Link>
              <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
