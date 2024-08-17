import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <h1>Common Layout for About Page</h1>
      <ul>
        <li>
          <Link href="/about">Go to ABOUT PAGE</Link>{" "}
        </li>
        <li>
          <Link href="/about/aboutcollege">Go to College PAGE</Link>{" "}
        </li>
        <li>
          <Link href="/about/aboutstudent">Go to Student PAGE</Link>{" "}
        </li>
      </ul>
      {children}
    </div>
  );
}
