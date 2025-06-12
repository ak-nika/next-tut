"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ClientRoute() {
  const theme = useTheme();

  return <h1 style={{ color: theme.colors.secondary }}>Client Router Page</h1>;
}
