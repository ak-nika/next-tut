import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center p-8">
      <SignUp />
    </div>
  );
}
