import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { Input } from "./Input";
const stories = storiesOf("Input", module);

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
  return <Input />;
});

stories.add("标签", () => {
  return <Input label="Discount code" />;
});

stories.add("输入", () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      onChange={(value: string) => {
        setValue(value);
      }}
      onBlur={(e) => {
        console.log("失去焦点");
      }}
      type="discountCode"
      label="Discount code"
      placeholder="Discount code"
    />
  );
});

stories.add("报错", () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helpText, setHelpText] = useState(<p>Enter a valid discount code</p>);

  return (
    <Input
      value={value}
      onChange={(valueStorage: string) => {
        setValue(valueStorage);
        if (valueStorage == "") {
          setError(false);
        } else {
          setError(true);
        }
      }}
      error={error}
      helpText={helpText}
    />
  );
});

stories.add("失焦", () => {
  return (
    <Input
      onBlur={(e) => {
        console.log("失去焦点");
      }}
    />
  );
});

stories.add("占位符", () => {
  const [value, setValue] = useState("");
  return (
    <Input
      placeholder="Discount code"
      value={value}
      onChange={(value: string) => {
        setValue(value);
      }}
    />
  );
});

stories.add("回车键", () => {
  return (
    <Input
      onPressEnter={() => {
        console.log("回车键");
      }}
    />
  );
});

stories.add("邮箱类型", () => {
  const [value, setValue] = useState("");
  return (
    <Input
      placeholder="email"
      label="email"
      value={value}
      onChange={(value: string) => {
        setValue(value);
      }}
      type="email"
    />
  );
});
// stories.add("Input", () => {
//   const [error, setError] = useState(false);
//   const [type, setType] = useState("number");
//   const [label, setLabel] = useState("Discount code");
//   const [value, setValue] = useState("");
//   const [placeholder, setPlaceholder] = useState("Discount code");
//   const [helpText, setHelpText] = useState(<p>Enter a valid discount code</p>);
//   function onPressEnter() {
//     if (type == "number") {
//       if (/^ [0 - 9] * $/.test(value)) {
//         console.log("???");
//       } else {
//         console.log("!!!");
//         setError(true);

//         // setHelpText(
//         //   <PTag error={error}>Enter a valid mobile phone number</PTag>
//         // );
//       }
//     } else if (type == "email") {
//       if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
//       } else {
//         setError(true);
//         // setHelpText(<PTag>Enter a valid email</PTag>);
//       }
//     }
//   }
//   const onChange = (value: string) => {
//     setError(false);
//     setValue(value);
//   };
//   const onBlur = (value: string) => {
//     console.log("失去焦点");
//   };
//   return (
//     <Input
//       error={error}
//       onPressEnter={onPressEnter}
//       onChange={onChange}
//       value={value}
//       placeholder={placeholder}
//       helpText={helpText}
//       label={label}
//       onBlur={onBlur}
//     />
//   );
// });
