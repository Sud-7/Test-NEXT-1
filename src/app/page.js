"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        This is Filty Frank<br></br>
        <button onClick={() => alert("Hey boi")}>Click me</button>
      </div>
    </main>
  );
}
