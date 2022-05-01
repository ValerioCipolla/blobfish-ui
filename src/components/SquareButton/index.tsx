import * as React from "react";
import "./styles.scss"

interface SquareButtonProps {
  label: string;
}

export const SquareButton: React.FC<SquareButtonProps> = ({ label }) => {

  return (
    <>
      <button className="square-button">{label}</button>
    </>
  );
};
