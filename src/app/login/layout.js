import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
  return (
    <div>
      <h1>Common Layout for Login Page</h1>
      <ul className="login-menu">
        <li>
          <h4>Login NavBar</h4>
        </li>
        <li>
          <Link href="/login">Go to Login PAGE</Link>
        </li>
        <li>
          <Link href="/login/facultylogin">Go to Faculty Login</Link>
        </li>
        <li>
          <Link href="/login/studentlogin">Go to Student Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
