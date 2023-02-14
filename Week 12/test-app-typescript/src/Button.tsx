import React, { useState } from "react";

export default function Button({ isDisabled, label }: any) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button disabled={isDisabled} onClick={() => setCount(count + 1)}>
        {label}
      </button>
    </>
  );
}
