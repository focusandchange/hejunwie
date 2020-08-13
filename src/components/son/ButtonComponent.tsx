import React, { FC, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const ButtonComponent = styled.button<{
  color?: string;
  backgroundColor?: string;
  backgroundHoverColor?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: "small" | "middle" | "large";
  adapter?: boolean;
  arrow?: boolean;
}>`
  position: relative;

  display: ${(props) => (props.adapter ? "flex" : "static")};

  box-sizing: border-box;
  width: ${(props) =>
    props.size == "small"
      ? "80px"
      : props.size == "middle"
      ? "160px"
      : "320px"};
  height: ${(props) =>
    props.size == "small" ? "40px" : props.size == "middle" ? "80px" : "160px"};

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
      props.disabled ? (props) => "#c8c8c8" : props.backgroundHoverColor};
  }
`;
const ButtonArrow = styled.svg<{ arrow?: boolean; loading?: boolean }>`
  display: ${(props) =>
    props.loading ? "none" : props.arrow ? "auto" : "none"};

  width: 20px;
  height: 20px;

  text-align: center;
`;
const ButtonContent = styled.span<{ loading?: boolean; arrow?: boolean }>`
  display: ${(props) =>
    props.loading ? "none" : props.arrow ? "none" : "auto"};

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
const ButtonAnimation = styled.svg<{ loading?: boolean }>`
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: "small" | "middle" | "large";
  adapter?: boolean;
  disabled?: boolean;

  loading?: boolean;
  arrow?: boolean;
}

const Button: FC<ButtonProps> = ({
  color = "#FFF",
  backgroundColor = "#c8c8c8",
  backgroundHoverColor = "black",
  onClick,
  size,
  adapter = false,
  disabled = false,

  loading = false,
  arrow,
}) => {
  return (
    <>
      <ButtonComponent
        color={color}
        backgroundColor={backgroundColor}
        backgroundHoverColor={backgroundHoverColor}
        loading={loading}
        disabled={disabled}
        onClick={onClick}
        size={size}
        adapter={adapter}
        arrow={arrow}
      >
        <ButtonContent loading={loading} arrow={arrow}>
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
      </ButtonComponent>
    </>
  );
};

export default Button;
