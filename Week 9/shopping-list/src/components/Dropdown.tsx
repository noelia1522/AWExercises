import React, { useState } from "react";
import "./Dropdown.css";
type ButtonProps = {
  handleClick: (event: React.MouseEvent, newValue: string) => void;
};
export default function Dropdown({ handleClick }: ButtonProps) {
  const [value, setValue] = useState("");
  function handleChange(event: any) {
    setValue(event.target.value);
    // console.log(value);
  }
  return (
    <div className="dropdown">
      <select className="dropdown-menu" value={value} onChange={handleChange}>
        <option value="bread">Bread</option>
        <option value="banana">Banana</option>
        <option value="apple">Apple</option>
        <option value="kiwi">Kiwi</option>
      </select>
      <button type="submit" onClick={(event: any) => handleClick(event, value)}>
        Add Item
      </button>
    </div>
  );
}
