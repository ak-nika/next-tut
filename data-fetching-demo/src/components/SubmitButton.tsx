"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4 mx-auto cursor-pointer transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting..." : children}
    </button>
  );
};

export default SubmitButton;
