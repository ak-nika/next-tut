"use client";

import { useState } from "react";

const ClientComponentOne = () => {
  const [name, setName] = useState("Batman");

  return <h1>Client Component One</h1>;
};

export default ClientComponentOne;
