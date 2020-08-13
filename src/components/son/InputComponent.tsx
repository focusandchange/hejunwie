import React, { FC, useState, KeyboardEventHandler, ChangeEvent } from "react";
import styled from "styled-components";

const InputComponentWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  display: block;
`;
const InputComponentLabel = styled.label``;
const InputComponent = styled.input``;
interface InputProps {
  // helpText?: ReactNode;
  error?: boolean;
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
  onChange?: (value: string) => void;
  // onBlur?: (value: string) => void;
  // placeholder?: string;
  // label?: string;
  value?: string | number | readonly string[];
  // type?: string;
}

const Input: FC<InputProps> = ({
  // helpText,
  error,
  onPressEnter = () => {},
  onChange = () => {},
  // onBlur,
  // placeholder,
  // label,
  value,
  // type
}) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  function EnterCheck(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode == 13) {
      onPressEnter(e);
    }
  }

  return (
    <InputComponentWrapper>
      <InputComponentLabel></InputComponentLabel>
      <InputComponent
        onKeyDown={EnterCheck}
        value={value}
        onChange={handleChange}
      ></InputComponent>
    </InputComponentWrapper>
  );
};

export default Input;
