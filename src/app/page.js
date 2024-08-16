"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div>
        <h1>HOME PAAGE</h1>
        <br></br>
        <Link href="/login">Go to about Login</Link>
        <br></br>
        <Link href="/about">Go to about Page</Link>
        <br></br>
        <button onClick={() => router.push("/login")}>GO TO LOGIN</button>
        <button onClick={() => router.push("/about")}>GO TO ABOUT</button>
      </div>
    </main>
  );
}
