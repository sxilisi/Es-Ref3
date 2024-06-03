import { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ initialValue }) {
  const [counter, setCounter] = useState(0);
  const directionRef = useRef(null);
  const prevCounterRef = useRef(null);

  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]);

  function hadleCounterIncrement() {
    const newCounter = counter + 1;
    setCounter(newCounter);
    updateDirection(newCounter);
  }

  function hadleCounterDecrement() {
    const newCounter = counter - 1;
    setCounter(newCounter);
    updateDirection(newCounter);
  }

  function hadleCounterReset() {
    setCounter(0);
    updateDirection(0);
  }

  function updateDirection(newCounter) {
    if (newCounter > initialValue) {
      directionRef.current = "up";
    } else if (newCounter < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = null;
    }
  }

  useEffect(() => {
    if (directionRef.current !== null && prevCounterRef.current !== null) {
      console.log(`Direction: ${directionRef.current}`);
    }
  }, [counter]);

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={hadleCounterIncrement}>increment</button>
      <button onClick={hadleCounterReset}>reset</button>
      <button onClick={hadleCounterDecrement}>decrement</button>
    </div>
  );
}
