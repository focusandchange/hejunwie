import { storiesOf } from "@storybook/react";
import React from "react";
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

stories.add("Input", () => <Input />);
