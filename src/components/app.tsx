import React, { FC } from "react";
import styled, { css, keyframes } from "styled-components";
// 主体
const Spin = keyframes`
 from { transform: rotate(0deg); }
 to { transform: rotate(360deg); }
`;
const ProductMain = styled.span`
  width: 120px;
  height: 120px;

  animation: ${Spin} 2s linear infinite;

  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
`;

const Product = () => {
  return <ProductMain></ProductMain>;
};

export default Product;
