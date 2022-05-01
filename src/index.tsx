import * as React from "react";
import "./styles.scss"

interface CounterProps {
  name: string;
}

const Counter: React.FC<CounterProps> = () => {

  return (
    <>
      <h1 className="red-text">hello</h1>
    </>
  );
};

export default Counter;