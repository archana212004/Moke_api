import  {React, useState } from "react";
import { addUser } from "./api";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, image };
    await addUser(newUser);
    navigate("/"); // Redirect to user list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required /><br/>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br/>
      <input value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Avatar URL" required /><br/><br/>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;