type Author = {
  id: number;
  name: string;
};

const Author = async ({ userId }: { userId: number }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: Author = await response.json();
  return (
    <p className="text-gray-600 text-sm">
      Written by{" "}
      <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
        {user.name}
      </span>
    </p>
  );
};

export default Author;
