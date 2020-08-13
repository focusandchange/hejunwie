import { storiesOf } from "@storybook/react";
import React from "react";
import APP from "../src/components/app";
const stories = storiesOf("Base", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("example", () => <APP />);
