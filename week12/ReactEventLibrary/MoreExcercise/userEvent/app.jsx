import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("1");

  const handleChange = ({ target: { value: newValue } }) => {
    setValue(newValue);
  };

  // This is intentional, such that every new input "click/focus" starts a brand-new value
  const handleFocus = ({ target }) => {
    target.select();
  };

  return (
    <div className="App">
      <span
        aria-label="to be more descriptive"
        role="img"
        style={{ fontSize: "2rem", paddingLeft: "6rem" }}
      >
        ☝
      </span>
      <h1>Look at the "Tests" Tab</h1>
      <hr />
      <br />
      <button tabIndex={0}>GETS FIRST FOCUS</button>
      <br />
      <br />
      <input
        aria-label="cool-input"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <br />
    </div>
  );
}
