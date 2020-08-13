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

stories.add("Button", () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arrow, setArrow] = useState(true);
  const [color, setColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [backgroundHoverColor, setBackgroundHoverColor] = useState("#c8c8c8");
  const [size, setSize] = useState<"small" | "middle" | "large">("small");
  function onClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <Button
      color={color}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      size={size}
      onClick={onClick}
      adapter={false}
      disabled={disabled}
      loading={loading}
      arrow={arrow}
    />
  );
});
