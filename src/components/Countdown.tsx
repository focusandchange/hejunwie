import React, { FC } from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
const Background = styled.div`
  position: fixed;
  bottom: 0;
  height: 40px;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
`;
const DivLeft = styled.div`
  position: relative;
  left: 10px;
  color: white;
`;
const DivMid = styled.div`
  position: relative;
  left: 20px;
  padding: 5px 5px 5px 5px;

  color: white;
  border: 1px dashed white;
`;
const DivRight = styled.div`
  position: relative;
  left: 20px;
  color: white;
`;
const DivClose = styled.div`
  position: fixed;
  color: white;
  right: 20px;
  cursor: pointer;
`;
function CountDownDiv({ minutes = 20, seconds = 0 }) {
  const [over, setOver] = useState(false);

  const [time, setTime] = useState({
    minutes: parseInt(minutes.toString()),
    seconds: parseInt(seconds.toString()),
  });
  const [displayState, setDisplayState] = useState(true);

  const tick = () => {
    if (time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.seconds === 0)
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    else
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
  };
  const Click = () => {
    setDisplayState(false);
  };
  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <Background style={{ display: displayState ? "flex" : "none" }}>
      <DivLeft>您的折扣已激活！</DivLeft>
      <DivMid>优惠券：XD64QZOB</DivMid>
      <DivRight style={{ padding: "0 6px" }}>
        在
        {`${time.minutes
          .toString()
          .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}
        秒内 到期
      </DivRight>
      <DivClose onClick={Click}>✕</DivClose>
    </Background>
  );
}
export default CountDownDiv;
