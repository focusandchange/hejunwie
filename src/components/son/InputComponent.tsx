import React, { FC, useState } from "react";
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
  // error?: boolean;
  // onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
  // onChange?: (value: string) => void;
  // onBlur?: (value: string) => void;
  // placeholder?: string;
  // label?: string;
  // value?: string | number | readonly string[];
  // type?: string;
}

const Input: FC<InputProps> = (
  {
    // helpText,
    // error,
    // onPressEnter,
    // onChange,
    // onBlur,
    // placeholder,
    // label,
    // value,
    // type
  }
) => {
  return <InputComponent></InputComponent>;
};

export default Input;
