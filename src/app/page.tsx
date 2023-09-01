"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <main className={styles.main}>
      <h1 role="heading">Home Page</h1>
      <p>This is a paragraph</p>
      <button>Click Me</button>
      <div>
        <label htmlFor="username">username:</label>
        <input id="username" type="text" />
      </div>
      <div>
        {showText && <p data-testid="greet-user">hello ullas</p>}
        <button onClick={() => setShowText(!showText)}>show text</button>
      </div>
    </main>
  );
}
