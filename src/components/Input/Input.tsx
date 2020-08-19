import React, {
  FC,
  useState,
  KeyboardEventHandler,
  ChangeEvent,
  ReactNode,
  useCallback,
} from "react";
import styled, { css } from "styled-components";

const InputComponentWrapper = styled.div<InputProps>`
  position: relative;

  display: block;
  flex-grow: 1;

  margin: 5px;

  ${(props) => {
    return (
      props.error &&
      css`
        ${PTag} {
          display: block;
        }
      `
    );
  }}
`;

const InputComponent = styled.input<{
  value?: string | number | readonly string[];
  type?: string;
  onBlurFlag?: boolean;
  onBlurFlagSecond?: boolean;
  onBlurFlagThird?: boolean;
}>`
  display: block;

  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0.9285714286em 0.7857142857em;

  transition: all 0.2s ease-out;
  word-wrap: break-word;
  word-break: normal;

  color: #333;
  border: 1px transparent solid;
  border-color: #d5d5d5;
  border-radius: 5px;
  background: transparent;
  background-color: white;
  background-clip: padding-box;

  font: inherit;
  line-height: inherit;
  -webkit-box-direction: normal;
  appearance: none;
  -webkit-font-smoothing: inherit;

  &:focus {
    border-color: #a26b25;
    outline: none;
    box-shadow: 0 0 0 1px #a26b25;
  }

  ${(props) => {
    if (props.value != "")
      return css`
        padding-top: 1.5em;
        padding-bottom: 0.3571428571em;
      `;
    if (props.value == "" && props.type == "email") return css``;
    if (
      props.value == "" &&
      props.type == "discountCode" &&
      props.onBlurFlag == true &&
      props.onBlurFlagThird == true
    )
      return css``;
    if (
      props.value == "" &&
      props.type == "discountCode" &&
      props.onBlurFlag == true &&
      props.onBlurFlagThird == false
    )
      return css`
        padding-top: 1.5em;
        padding-bottom: 0.3571428571em;
        ::placeholder {
          opacity: 0;
        }
      `;
    if (
      props.value == "" &&
      props.type == "discountCode" &&
      props.onBlurFlag == false
    )
      return css`
        padding-top: 1.5em;
        padding-bottom: 0.3571428571em;
        ::placeholder {
          opacity: 0;
        }
      `;
  }};
`;

const LabelContent = styled.div<{
  value?: string | number | readonly string[];
  type?: string;
  onBlurFlag?: boolean;
  onBlurFlagSecond?: boolean;
  onBlurFlagThird?: boolean;
}>`
  position: absolute;
  z-index: 1;
  top: 0;

  display: block;
  overflow: hidden;

  box-sizing: border-box;
  width: 100%;
  margin: 0.5em 0;
  margin-top: 0.4285714286em;
  margin-left: 1px;
  padding: 0 0.9166666667em;

  user-select: none;
  transition: all 0.2s ease-out;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
  pointer-events: none;

  color: #737373;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  font-size: 0.8571428571em;
  font-weight: normal;
  line-height: 1.3em;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;

  ${(props) => {
    if (props.value != "")
      return css`
        transform: none;
        opacity: 1;
      `;
    if (props.value == "" && props.type == "email")
      return css`
        transform: translateY(3px);
        opacity: 0;
      `;
    if (
      props.value == "" &&
      props.type == "discountCode" &&
      props.onBlurFlag == true &&
      props.onBlurFlagThird == true
    )
      return css`
        transform: translateY(3px);
        opacity: 0;
      `;
  }};
`;

const PTag = styled.div`
  display: none;

  margin: 8px 0 4px 0;

  color: red;
`;

interface InputProps {
  helpText?: ReactNode;
  error?: boolean;
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  placeholder?: string;
  label?: string;
  value?: string | number | readonly string[];
  type?: string;
}

export const Input: FC<InputProps> = ({
  helpText = <p />,
  error = false,
  onPressEnter = () => {},
  onChange = () => {},
  onBlur = () => {},
  placeholder = "",
  label = "",
  value = "",
  type = "discountCode",
}) => {
  const [onBlurFlag, setOnBlurFlag] = useState(true);
  const [onBlurFlagSecond, setOnBlurFlagSecond] = useState(true);
  const [onBlurFlagThird, setOnBlurFlagThird] = useState(true);

  //输入
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOnBlurFlagThird(false);
      if (onBlurFlagSecond == true) {
        setOnBlurFlag(false);
      }

      onChange(e.target.value);
    },
    [onBlurFlagSecond, onChange]
  );
  //失焦
  const onBlurChange = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (value != "") {
        setOnBlurFlag(true);
        setOnBlurFlagSecond(false);
      }
      if (value == "") {
        setOnBlurFlagSecond(true);
      }
      if (value == "" && onBlurFlagThird == false) {
        setOnBlurFlagThird(true);
      }
      onBlur(e.target.value);
    },
    [onBlur]
  );
  const EnterCheck = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode == 13) {
        onPressEnter(e);
      }
    },
    [onPressEnter]
  );
  return (
    <InputComponentWrapper error={error}>
      <LabelContent
        value={value}
        type={type}
        onBlurFlag={onBlurFlag}
        onBlurFlagSecond={onBlurFlagSecond}
        onBlurFlagThird={onBlurFlagThird}
      >
        {label}
      </LabelContent>

      <InputComponent
        onBlurFlag={onBlurFlag}
        onBlurFlagSecond={onBlurFlagSecond}
        onBlurFlagThird={onBlurFlagThird}
        onKeyDown={EnterCheck}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onBlur={onBlurChange}
        type={type}
      ></InputComponent>
      <PTag>{helpText}</PTag>
    </InputComponentWrapper>
  );
};
