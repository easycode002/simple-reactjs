import React from "react";
interface ButtonProps {
  label?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button className="bg-indigo-500 py-[12px] px-[20px] text-lg text-white" onClick={onClick}>{label}</button>;
};

export default Button;
