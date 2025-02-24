import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "./api";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", avatar: "" });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await getUserById(id);
    setUser(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required /><br/>
      <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required /><br/>
      <input value={user.image} onChange={(e) => setUser({ ...user, image: e.target.value })} required /><br/>
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUser;