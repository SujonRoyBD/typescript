import React from 'react';
interface User {
  id: number;
  name: string;
  email: string;
}
const Json = () => {
  const users: User[] = [
    { id: 1, name: "Sakib", email: "sakib@example.com" },
    { id: 2, name: "Tamim", email: "tamim@example.com" },
    { id: 3, name: "Rahim", email: "rahim@example.com" }
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Json;
