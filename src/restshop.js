import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RestShop() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
   const fetchUsers = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    };
   fetchUsers();
  }, []);

  if (!users) {
    return <span data-testid="loading">Loading data...</span>;
  }

  return (
    <span data-testid="resolved">
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </span>
  );
}
