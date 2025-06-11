"use client";

import { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}!</p>
    </div>
  );
};

export default Dashboard;
