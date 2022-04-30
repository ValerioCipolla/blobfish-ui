import * as React from "react";
import "./style.css"

const { useState } = React

interface CounterProps {
  name: string;
}

const Counter: React.FC<CounterProps> = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="red-text">Name: {name}</p>
      <p className="red-text">Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default Counter;