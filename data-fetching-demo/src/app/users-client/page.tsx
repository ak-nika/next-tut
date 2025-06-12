"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users.");

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li key={user.id} className="p-4 bg-gray-300 rounded-lg text-gray-800">
          <p className="font-bold">{user.name}</p>

          <div className="text-sm">
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
