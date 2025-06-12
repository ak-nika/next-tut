"use client";

import { useTheme } from "@/components/ThemeProvider";
import { clientFunction } from "@/utils/client-utils";

export default function ClientRoute() {
  const theme = useTheme();
  const result = clientFunction();

  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>Client Router Page</h1>
      <p>{result}</p>
    </div>
  );
}
