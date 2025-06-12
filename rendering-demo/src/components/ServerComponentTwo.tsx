import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/ServerComponentTwo.tsx", "utf-8");

  return <h1>Server Component Two</h1>;
};
