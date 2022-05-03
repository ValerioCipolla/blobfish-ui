import * as React from "react";
import "./styles.scss"

interface RoundButtonProps {
  label: string;
}

export const RoundButton: React.FC<RoundButtonProps> = ({ label, text }) => {

  return (
    <>
      <button className="round-button">{label} {text}</button>
    </>
  );
};
