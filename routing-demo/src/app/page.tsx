import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our routing demo application.</p>

      <Link href="/blog">Blog Page</Link>
      <Link href="/products">Products Page</Link>

      <div>
        <Link href="/articles/breaking-new-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-new-123?lang=fr">Read in French</Link>
      </div>
    </div>
  );
}
