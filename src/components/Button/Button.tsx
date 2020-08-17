import React, { FC } from "react";
import styled, { keyframes, css } from "styled-components";

// Button ?
const ButtonWrap = styled.button<ButtonProps>`
  position: relative;
  display: ${(props) => (props.adapter ? "flex" : "static")};
  /* flex: 1 1 auto; */
  justify-content: center;
  max-width: 320px;
  align-items: center;
  box-sizing: border-box;
${(props) => {
  return [
    props.adapter &&
      css`
        @media (max-width: 749px) {
          width: 100%;
        }
      `,
  ];
}}

 
  padding: ${(props) => {
    if (props.size === "large") return " 40px 96px";
    if (props.size === "middle") return " 20px 48px";
    if (props.size === "small") return " 0px 24px";
  }};
  min-width: 84px;
  min-height: 44px;
  margin: 0 0 0 12px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  text-align: center;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  color: ${(props) => props.color};

  border: 1px transparent solid;
  border-radius: 5px;
  outline: none;
  background: ${(props) =>
    props.disabled ? "#c8c8c8" : props.backgroundColor};

  font-weight: 500;
  line-height: normal;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#c8c8c8" : props.backgroundHoverColor};
  }
`;

const ButtonArrow = styled.svg<{ arrow?: boolean; loading: boolean }>`
  display: ${(props) => {
    if (props.loading === true) return "none";
    if (props.loading === false && props.arrow === true) return "auto";
    if (props.loading === false && props.arrow === false) return "none";
  }};

  width: 20px;
  height: 20px;
`;

const ButtonContent = styled.span<{ loading?: boolean; arrow?: boolean }>`
  display: ${(props) => {
    if (props.loading === true) return "none";
    if (props.loading === false && props.arrow === true) return "none";
    if (props.loading === false && props.arrow === false) return "auto";
  }};

  text-align: center;
`;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1440deg);
  }
`;

const ButtonAnimation = styled.svg<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "auto" : "none")};

  width: 20px;
  height: 20px;

  animation: ${Spin} 2s linear infinite;

  /* 
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%; */
`;

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  backgroundHoverColor?: string;
  size?: "small" | "middle" | "large";
  adapter?: boolean;
  disabled?: boolean;
  loading?: boolean;
  arrow?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<ButtonProps> = ({
  color = "white",
  backgroundColor = "black",
  backgroundHoverColor = "#c8c8c8",
  size = "small",
  adapter = false,
  disabled = false,
  loading = false,
  arrow = false,
  onClick,
}) => {
  return (
    <ButtonWrap
      color={color}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      loading={loading}
      disabled={disabled}
      size={size}
      adapter={adapter}
      arrow={arrow}
      onClick={onClick}
    >
      <ButtonContent arrow={arrow} loading={loading}>
        Apply
      </ButtonContent>
      <ButtonArrow arrow={arrow} loading={loading}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z "
            fill="white"
          ></path>
        </svg>
      </ButtonArrow>
      <ButtonAnimation loading={loading}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z"
            fill="white"
          ></path>
        </svg>
      </ButtonAnimation>
    </ButtonWrap>
  );
};

// 导出的组件名未与文件名一致

// 组件拆分  删除无用的变量  三元运算符最多一重  代码块空格  多余空标签
