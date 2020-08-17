import React, { FC, useState, useCallback } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
const DiscountCodeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  flex: 1;
  min-width: 200px;
`;

const ButtonWrapper = styled.div`
  margin-top: 5px;
  align-self: flex-start;
`;

export const DiscountCode: FC = ({}) => {
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [valueStorage, setValueStorage] = useState("");
  const [error, setError] = useState(false);
  const [type, setType] = useState("discountCode");
  const [helpText, setHelpText] = useState(<p>Enter a valid discount code</p>);
  const [placeholder, setPlaceholder] = useState("Discount code");
  const [label, setLabel] = useState("Discount code");

  const buttonClick = useCallback(() => {
    if (valueStorage == "error") {
      setError(true);
    } else {
      alert("折扣码：" + valueStorage);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [valueStorage]);

  const PressEnter = useCallback(() => {
    buttonClick();
  }, [buttonClick]);

  return (
    <DiscountCodeWrapper>
      <InputWrapper>
        <Input
          value={valueStorage}
          onChange={(value: string) => {
            setError(false);
            setValueStorage(value);

            if (value != "") {
              setDisabled(false);
            } else if (value == "" && disabled == false) {
              setDisabled(true);
            }
          }}
          placeholder={placeholder}
          helpText={helpText}
          error={error}
          label={label}
          onPressEnter={PressEnter}
          type={type}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          adapter={true}
          arrow={true}
          disabled={disabled}
          loading={loading}
          onClick={buttonClick}
        />
      </ButtonWrapper>
    </DiscountCodeWrapper>
  );
};
