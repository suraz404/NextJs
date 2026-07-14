import Link from "next/link";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="min-h-20 bg-blue-600">
        <ul className="flex flex-row gap-20 p-4">
          <Link href="/layoutLearning">
            {" "}
            <li>Home</li>
          </Link>
          <Link href="/layoutLearning/about">
            {" "}
            <li>About</li>
          </Link>
          <Link href="/layoutLeaning/contact">
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
      </header>
      {children}
    </div>
  );
}
