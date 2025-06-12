import "server-only";

export const serverFunction = () => {
  console.log(
    "Use multiple libraries, environment variables, interact with databases, process confidential information and more!"
  );

  return "Server only code";
};
