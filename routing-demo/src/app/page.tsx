import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our routing demo application.</p>

      <Link href="/blog">Blog Page</Link>
      <Link href="/products">Products Page</Link>
    </div>
  );
}
