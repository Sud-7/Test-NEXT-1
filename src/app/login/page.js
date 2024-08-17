"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Hello = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1 className="heading">LOGIN PAGE</h1>
      <br></br>
      <h2>
        <Link href="/about">Go to about page</Link>
        <br></br>
        <Link href="/">Go to home Page</Link>
      </h2>
      <br></br>
      <button onClick={() => router.push("/about")}>Move ABOUT</button>
      <h2>
        <div>
          <Link href="/login/studentlogin">Student Login</Link>
        </div>
        <div>
          <Link href="/login/facultylogin">Faculty Login</Link>
        </div>
      </h2>

      <button onClick={() => navigate("studentlogin")}>Student Login</button>
      <br></br>
      <button onClick={() => navigate("facultylogin")}>Faculty Login</button>
    </div>
  );
};

export default Hello;
