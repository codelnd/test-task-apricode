import React, { useState } from "react";

const useInput = (initialValue: string) => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState(initialValue);

  const onChange = (e: any) => {
    setValue(e.target.value);
    setInput(e.target);
  };

  return {
    value,
    onChange,
    input,
  };
};

export default useInput;
