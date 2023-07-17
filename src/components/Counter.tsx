import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onButtonClick = () => setCounter((prev) => prev + 1);

  return (
    <div className={styles.counter}>
      <h1>Current counter: {counter}</h1>

      <button onClick={onButtonClick}>Click</button>
    </div>
  );
};
