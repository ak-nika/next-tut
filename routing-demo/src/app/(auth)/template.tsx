"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");
  const pathname = usePathname();

  const navLinks = [
    { href: "/login", name: "Login" },
    { href: "/register", name: "Register" },
    { href: "/forgotPassword", name: "Forgot Password" },
  ];

  return (
    <>
      <h2>Auth Pages</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              style={{
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "blue" : "",
              }}
              href={link.href}
              key={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
};

export default AuthLayout;
