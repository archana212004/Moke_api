const API_URL = "https://67b6b4ef07ba6e5908416400.mockapi.io/api/users";

// GET all users
export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// GET single user
export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// POST a new user
export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// PUT (Update) a user
export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// DELETE a user
export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};