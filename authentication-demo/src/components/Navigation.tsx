import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  //   UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold text-[var(--foreground)]"
            >
              Next.js App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="text-[var(--background)] bg-[var(--foreground)] cursor-pointer rounded px-4 py-2 font-semibold outline-none">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="text-[var(--background)] bg-[var(--foreground)] cursor-pointer rounded px-4 py-2 font-semibold outline-none">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <button className="text-[var(--background)] bg-[var(--foreground)] cursor-pointer rounded px-4 py-2 font-semibold outline-none">
                  Sign out
                </button>
              </SignOutButton>
              {/* <UserButton /> */}
              <Link href="/userProfile">Profile</Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
