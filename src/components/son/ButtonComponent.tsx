import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

const ButtonComponent = styled.button<{
  color?: string;
  backgroundcolor?: string;
  backgroundhovercolor?: string;
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
      ? "120px"
      : "160px"};
  height: ${(props) =>
    props.size == "small" ? "40px" : props.size == "middle" ? "60px" : "80px"};

  cursor: ${(props) => (props.disabled ? "pointer" : "default")};

  text-align: center;
  pointer-events: ${(props) => (props.disabled ? "default" : "none")};

  color: ${(props) => props.color};

  border: 1px transparent solid;
  border-radius: 5px;
  background: ${(props) =>
    props.disabled ? props.backgroundcolor : "#c8c8c8"};

  font-weight: 500;
  line-height: normal;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? (props) => props.backgroundhovercolor : "#c8c8c8"};
  }
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
    <ButtonComponent
      color={color}
      backgroundcolor={backgroundColor}
      backgroundhovercolor={backgroundHoverColor}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      size={size}
      adapter={adapter}
      arrow={arrow}
    >
      Apple
    </ButtonComponent>
  );
};

export default Button;
