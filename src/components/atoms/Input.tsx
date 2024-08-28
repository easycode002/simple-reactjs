import React from "react";

interface InputProp {
  label?: string;
  placeholder?: string;
}
const Input: React.FC<InputProp> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-1">
        <p>{label}</p>
        <p className="text-red-500">*</p>
      </div>
      <input type="text" className="p-2 outline-none border-2 border-gray-900 focus:ring" placeholder={placeholder} />
    </div>
  );
};

export default Input;

export function TestINput() {
  return <Input label="Name" placeholder="Enter name here..." />;
}
