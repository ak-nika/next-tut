type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

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
