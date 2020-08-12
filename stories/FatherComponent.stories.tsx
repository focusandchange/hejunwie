import { storiesOf } from "@storybook/react";
import React from "react";
import FatherComponent from "../src/components/FatherComponent";
const stories = storiesOf("FatherComponent", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("FatherComponent", () => <FatherComponent />);
