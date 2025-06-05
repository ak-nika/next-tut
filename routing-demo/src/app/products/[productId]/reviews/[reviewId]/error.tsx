"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reload}>Try again</button>
    </div>
  );
};

export default Error;
