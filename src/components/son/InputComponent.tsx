import React, { FC, useState } from "react";
import styled from "styled-components";

const InputComponent = styled.input`
  display: block;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 0.9285714286em 0.7857142857em;

  word-break: normal;

  color: #333;
  border-color: #d9d9d9;
  border-radius: 5px;
  background-color: white;

  /* border: 1px transparent solid;  */
  background-clip: padding-box;

  line-height: inherit;
`;

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
