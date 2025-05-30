import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h2>Auth Pages</h2>
      {children}
    </>
  );
};

export default AuthLayout;
