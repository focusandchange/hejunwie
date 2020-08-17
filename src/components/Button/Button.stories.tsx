import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "./Button";

const stories = storiesOf("Button", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("默认", () => {
  return <Button />;
});

stories.add("箭头", () => {
  return <Button arrow={true} />;
});

stories.add("禁用", () => {
  const [disabled, setDisabled] = useState(true);

  return <Button disabled={disabled} />;
});

stories.add("大小", () => {
  const [size, setSize] = useState<"small" | "middle" | "large">("small");

  return (
    <>
      <Button size="small" />
      <Button size="middle" />

      <Button size="large" />
    </>
  );
});
stories.add("加载中", () => {
  const [loading, setLoading] = useState(true);

  return <Button loading={loading} />;
});
stories.add("自适应", () => {
  const [adapter, setAdapter] = useState(true);

  return <Button adapter={adapter} />;
});
