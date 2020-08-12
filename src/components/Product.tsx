import React, { FC } from "react";
import styled, { css } from "styled-components";
// 主体
const ProductMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  margin: auto;
  padding: 1em;

  box-shadow: 1px 1px 9px -1px rgba(0, 0, 0, 0.12);
`;
// 用到的几种容器样式
const ProductContainerOne = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  width: 155px;
  max-width: 250px;
  margin: 0 1em;
  padding: 1em;
`;
const ProductContainerTwo = styled.div`
  display: flex;
  display: flex !important;
  justify-content: space-between;
  justify-content: center;

  margin: 12px 0 0;
`;

const ProductContainerThree = styled.div`
  ::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    display: -webkit-box;
    display: flex;
    align-items: center;

    padding: 10px;

    content: "↓";
    pointer-events: none;
    -webkit-box-align: center;
  }
  position: relative;

  width: 100%;
  margin-right: 10px;

  text-align: center;

  border: 1px solid #bbb;
  border-radius: 3px;
  outline: none;
`;
const ProductContainerFour = styled.div`
  display: flex;

  flex-direction: row;
`;
const ProductContainerFive = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  margin: 12px 0 0;

  text-align: center;

  font-size: 1.5em;
  font-weight: 600;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;
// 顶部容器
const ProductTop = styled.div`
  padding: 0 0 1em;

  text-align: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  outline: none;

  font-size: 19.6px;
`;
// 下主体部分容器
const ProductBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* margin: auto; */
  padding: 20px;
`;
// 图片
const ProductImg = styled.div`
  display: block;

  width: 100%;
  height: 150px;
  margin: 12px 0 0;

  outline: none;
  background-image: url(https://cdn.shopify.com/s/files/1/0248/1661/5478/products/u_1122653514_2995817418_fm_26_gp_0.jpg?v=1581493211);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;
// 标题
const ProductTitle = styled.div`
  display: block;
  overflow: hidden;

  height: 38px;
  margin: 12px 0 0;

  text-align: center;

  outline: none;

  font-size: 1rem !important;
`;
// 选择部分
const ProductSelect = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 10px 30px 10px 10px;

  border: none;
  border-radius: 4px;
  outline: none;
  appearance: none;
`;
const Button = styled.button`
  height: 39px;
  padding: 5px 10px;

  cursor: pointer;

  border: none;
  outline: none;
  background: #ececec;

  font-size: 17px;
`;

const Input = styled.input`
  flex-shrink: 1;

  width: 30px;

  text-align: center;

  border-width: 1px;
  border-style: solid;
  border-color: #e4e4e4 transparent;
  border-radius: 3px;
  outline: none;
`;
// 价格部分
const ProductPriceOne = styled.div`
  margin: 5px 5px 5px 0;
  margin-bottom: 9px;

  text-align: center;

  color: #0773f1;

  font-size: 21px;
  font-weight: 600;
`;
const ProductPriceTwo = styled.div`
  margin: 5px 5px 5px 0;
  margin-bottom: 9px;

  text-align: center;
  text-decoration: line-through;

  color: #4a3636;

  font-size: 21px;

  /* font-size: 1.5em; */
  font-weight: 600;
`;
const ProductDiscount = styled.div`
  margin: 5px 5px 5px 0;
  margin-bottom: 9px;
  padding: 3px 7px;

  text-align: center;

  color: #0773f1;
  border: 1px solid;
  border-radius: 50px;

  font-size: 12px;
  font-weight: 600;
`;

// 提交按钮
const ProductAccept = styled.button`
  overflow: visible;

  width: 100%;
  margin: 12px 0 0;
  margin-top: 1em;
  padding: 1em;

  cursor: pointer;
  text-transform: none;

  color: #fff;

  border: none;
  border-radius: 3px;
  outline: none;
  background-color: #0773f1;

  line-height: normal;
  appearance: button;
`;

const Product = () => {
  return (
    <>
      <ProductMain>
        <ProductTop>You have unlocked a 25% discount</ProductTop>
        <ProductBody>
          <ProductContainerOne>
            <ProductImg />
            <ProductTitle>Cat clothes</ProductTitle>
            <ProductContainerTwo>
              <ProductContainerThree>
                <ProductSelect>
                  <option>S/RED</option>
                </ProductSelect>
              </ProductContainerThree>
              <ProductContainerFour>
                <Button>-</Button>
                <Input type="tel" min="1" value="1" />
                <Button>+</Button>
              </ProductContainerFour>
            </ProductContainerTwo>
            <ProductContainerFive>
              <ProductPriceOne>$0.50</ProductPriceOne>
              <ProductPriceTwo>$5.00</ProductPriceTwo>
              <ProductDiscount>90% OFF</ProductDiscount>
            </ProductContainerFive>
            <ProductAccept>Accept</ProductAccept>
          </ProductContainerOne>
          <ProductContainerOne>
            <ProductImg />
            <ProductTitle>Cat clothes</ProductTitle>
            <ProductContainerTwo>
              <ProductContainerThree>
                <ProductSelect>
                  <option>S/RED</option>
                </ProductSelect>
              </ProductContainerThree>
              <ProductContainerFour>
                <Button>-</Button>
                <Input type="tel" min="1" value="1" />
                <Button>+</Button>
              </ProductContainerFour>
            </ProductContainerTwo>
            <ProductContainerFive>
              <ProductPriceOne>$0.50</ProductPriceOne>
              <ProductPriceTwo>$5.00</ProductPriceTwo>
              <ProductDiscount>90% OFF</ProductDiscount>
            </ProductContainerFive>
            <ProductAccept>Accept</ProductAccept>
          </ProductContainerOne>
          <ProductContainerOne>
            <ProductImg />
            <ProductTitle>Cat clothes</ProductTitle>
            <ProductContainerTwo>
              <ProductContainerThree>
                <ProductSelect>
                  <option>S/RED</option>
                </ProductSelect>
              </ProductContainerThree>
              <ProductContainerFour>
                <Button>-</Button>
                <Input type="tel" min="1" value="1" />
                <Button>+</Button>
              </ProductContainerFour>
            </ProductContainerTwo>
            <ProductContainerFive>
              <ProductPriceOne>$0.50</ProductPriceOne>
              <ProductPriceTwo>$5.00</ProductPriceTwo>
              <ProductDiscount>90% OFF</ProductDiscount>
            </ProductContainerFive>
            <ProductAccept>Accept</ProductAccept>
          </ProductContainerOne>
        </ProductBody>
      </ProductMain>
    </>
  );
};

export default Product;
