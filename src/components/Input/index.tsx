import * as React from "react";
import "./styles.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string,
}

export const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <>
      <input
        {...props}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

