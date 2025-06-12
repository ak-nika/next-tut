"use client";

import { serverFunction } from "@/utils/server-utils";

export default function ClientRoute() {
  const result = serverFunction();

  return (
    <div>
      <h1>Client Route</h1>
      <p>{result}</p>
    </div>
  );
}
