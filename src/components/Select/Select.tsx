import React, { FC } from "react";
import styled from "styled-components";

const SelectBigWrapper = styled.div`
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
  width: 100%;
  float: left;
  padding: 0.4285714286em;
  box-sizing: border-box;
`;

const SelectWrapper = styled.div`
  position: relative;

  word-wrap: break-word;
  word-break: break-word;

  color: #545454;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  line-height: 1.3em;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
`;

const SelectLabel = styled.label`
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
  transform: none;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
  pointer-events: none;

  opacity: 1;
  color: #737373;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  font-size: 0.8571428571em;
  font-weight: normal;
  line-height: 1.3em;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
`;

const SelectMain = styled.select`
  word-wrap: break-word;
  -webkit-box-direction: normal;
  font: inherit;
  margin: 0;
  appearance: none;
  -webkit-font-smoothing: inherit;
  background: transparent;
  text-transform: none;
  border: 1px transparent solid;
  background-clip: padding-box;
  border-radius: 5px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.9285714286em 0.7857142857em;
  word-break: normal;
  line-height: inherit;
  padding-right: 2.0714285714em;
  white-space: nowrap;
  background-color: white;
  color: #333333;
  border-color: #d9d9d9;
  transition: all 0.2s ease-out;
  padding-top: 1.5em;
  padding-bottom: 0.3571428571em;

  &:focus {
    outline: none;
    border-color: #a26b25;
    box-shadow: 0 0 0 1px #a26b25;
  }
`;

const SelectCaret = styled.div`
  position: absolute;
  top: 50%;
  right: 0;

  display: block;

  width: 2.1428571429em;
  height: 43%;

  transform: translate(0%, -50%);
  word-wrap: break-word;
  word-break: break-word;
  pointer-events: none;

  color: #545454;
  border-left: 1px rgba(179, 179, 179, 0.5) solid;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  font-size: 14px;
  line-height: 1.3em;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
`;

const SelectSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;

  display: inline-block;

  width: 10px;
  height: 10px;
  margin-left: -2px;

  transform: translate(-50%, -50%);
  vertical-align: middle;
  word-wrap: break-word;
  word-break: break-word;
  pointer-events: none;

  color: #919191;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  font-size: 14px;
  line-height: 1.3em;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
  fill: currentColor;
`;

export const Select: FC = () => {
  return (
    <SelectBigWrapper>
      <SelectWrapper>
        <SelectLabel>Country/Region</SelectLabel>
        <SelectMain>
          <option data-code="JP" value="Japan">
            Japan
          </option>
          <option data-code="US" value="United States">
            United States
          </option>
          <option data-code="CN" selected={true} value="China">
            China
          </option>
          <option disabled={true} value="---">
            ---
          </option>
          <option data-code="AF" value="Afghanistan">
            Afghanistan
          </option>
          <option data-code="AX" value="Aland Islands">
            Åland Islands
          </option>
          <option data-code="AL" value="Albania">
            Albania
          </option>
        </SelectMain>
        <SelectCaret>
          <SelectSvg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
              <path d="M0 3h10L5 8" fill-rule="nonzero"></path>
            </svg>
          </SelectSvg>
        </SelectCaret>
      </SelectWrapper>
    </SelectBigWrapper>
  );
};
