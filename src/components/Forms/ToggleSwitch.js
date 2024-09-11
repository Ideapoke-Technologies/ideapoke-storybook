"use client";


import React, { useState } from "react";
import styled from "styled-components";


const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
`;

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isOn ? "#d5f1ff" : "#ffffff")};
  transition: 0.4s;
  border-radius: 34px;
  border: 1px solid #beb6b4;

  &::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: ${(props) => (props.isOn ? "26px" : "4px")};
    bottom: 3px;
    background-color: #b9b9b9;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <Switch onClick={handleToggle}>
        <Slider isOn={isOn} />
      </Switch>
    </div>
  );
};

export default ToggleSwitch;
