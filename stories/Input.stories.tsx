import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Input from "../src/components/son/InputComponent";
const stories = storiesOf("components", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("Input", () => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("Discount code");
  function onPressEnter() {
    alert(value);
  }
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <Input
      error={error}
      onPressEnter={onPressEnter}
      onChange={onChange}
      value={value}
    />
  );
});
