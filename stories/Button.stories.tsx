import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Button from "../src/components/son/ButtonComponent";

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
function onClick() {
  alert("你好！");
}

stories.add("Button", () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Button
      color="yellow"
      backgroundColor="red"
      backgroundHoverColor="blue"
      onClick={onClick}
      size="small"
      adapter={false}
      disabled={disabled}
    />
  );
});
