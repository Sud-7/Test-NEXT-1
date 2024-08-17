"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <h2>
        <Link href="/login">Go to Login page</Link>
        <br></br>
        <Link href="/">Go to home Page</Link>
      </h2>
      <br></br>
      <div>
        <Link href="/about/aboutstudent">Student About</Link>
      </div>
      <div>
        <Link href="/about/aboutcollege">College About</Link>
      </div>
      <button onClick={() => router.push("/about/aboutstudent")}>
        Student About
      </button>
      <br></br>
      <button onClick={() => router.push("/about/aboutcollege")}>
        College About
      </button>
    </div>
  );
};

export default About;
