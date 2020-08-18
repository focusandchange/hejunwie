import React, { FC, useRef } from "react";
import styled from "styled-components";

const SectionBigWrapper = styled.div`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  color: #545454;
  -webkit-box-direction: normal;
  zoom: 1;
`;

const SectionWrapper = styled.fieldset`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  margin: 0;
  padding: 0;
  background: #fff;
  background-clip: padding-box;
  border: 1px solid;
  border-radius: 5px;
  color: #545454;
  border-color: #d9d9d9;
  margin-top: 0;
`;

const SectionRowWrapper = styled.div`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  color: #545454;
  padding: 1.1428571429em;
  position: relative;
  zoom: 1;
  display: table;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid #d9d9d9;
`;

const RadioWrapper = styled.div`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  color: #545454;
  zoom: 1;
  display: table;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 0;
`;
const RadioInput = styled.div`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  color: #545454;
  padding-right: 0.75em;
  white-space: nowrap;
  display: table-cell;
`;
const Input = styled.input`
  word-wrap: break-word;
  word-break: break-word;
  -webkit-box-direction: normal;
  white-space: nowrap;
  color: inherit;
  font: inherit;
  margin: 0;
  appearance: none;
  -webkit-font-smoothing: inherit;
  background: transparent;
  line-height: normal;
  width: 18px;
  height: 18px;
  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
  vertical-align: -4px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  background-color: white;

  box-shadow: 0 0 0 0 #a26b25 inset;
  border: 1px solid;
  border-color: #d9d9d9;

  transform: scale(1);
  /* 
  word-wrap: break-word;
  word-break: break-word;
  -webkit-box-direction: normal;
  white-space: nowrap;
  color: inherit;
  font: inherit;
  margin: 0;
  appearance: none;
  -webkit-font-smoothing: inherit;
  background: transparent;
  line-height: normal;
  width: 18px;
  height: 18px;
  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
  vertical-align: -4px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  background-color: white;

  border: none;
  box-shadow: 0 0 0 10px #a26b25 inset;
  border-color: #78501c; */
`;

const RadioLabel = styled.label`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  color: #545454;
  cursor: pointer;
  vertical-align: middle;
  display: table-cell;
  width: 100%;
`;

const RadioLabelPrimary = styled.span`
  font-size: 14px;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  color: #545454;
  cursor: inherit;
  font-family: inherit;
  vertical-align: top;
  display: table-cell;
  width: 100%;
`;

const ContentBoxEmphasis = styled.span`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  cursor: pointer;
  text-align: right;
  white-space: nowrap;
  font-weight: 500;
  color: #333333;
`;

const RadioLabelAccessory = styled.span`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  color: #545454;
  cursor: pointer;
  text-align: right;
  padding-left: 0.75em;
  white-space: nowrap;
  display: table-cell;
`;

export const Section: FC = () => {
  const InputRefFirst = useRef<HTMLInputElement>(null);
  const InputRefSecond = useRef<HTMLInputElement>(null);
  return (
    <SectionBigWrapper>
      <SectionWrapper>
        <SectionRowWrapper>
          <RadioWrapper>
            <RadioInput>
              <Input ref={InputRefFirst} />
            </RadioInput>
            <RadioLabel
              onClick={() => {
                if (InputRefFirst.current == null) {
                } else {
                  InputRefFirst.current.focus();
                }
              }}
            >
              <RadioLabelPrimary>Standard</RadioLabelPrimary>
              <RadioLabelAccessory>
                <ContentBoxEmphasis>$5.99</ContentBoxEmphasis>
              </RadioLabelAccessory>
            </RadioLabel>
          </RadioWrapper>
        </SectionRowWrapper>
        <SectionRowWrapper>
          <RadioWrapper>
            <RadioInput>
              <Input ref={InputRefSecond} />
            </RadioInput>
            <RadioLabel
              onClick={() => {
                if (InputRefSecond.current == null) {
                } else {
                  InputRefSecond.current.focus();
                }
              }}
            >
              <RadioLabelPrimary>Express</RadioLabelPrimary>
              <RadioLabelAccessory>
                <ContentBoxEmphasis>$9.99</ContentBoxEmphasis>
              </RadioLabelAccessory>
            </RadioLabel>
          </RadioWrapper>
        </SectionRowWrapper>
      </SectionWrapper>
    </SectionBigWrapper>
  );
};
