"use client";

// Import Library
import React from "react";
import styled from "styled-components";

// CSS-in-JS
const MainWrapper = styled.div`
  position: fixed;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999999;
  max-width: 775px;
`;

const InnerWrapper = styled.div`
  background-color: #ffd4d4;
  border: 1px solid #ffd4d4;
  padding: 0px 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s, border 0.5s;
  border-radius: 4px;
  box-shadow: -16px 8px 30.9px 0px #00000040;

  span {
    font-weight: 600;
  }
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #ff4141;
`;

const DangerBanner = () => {
  return (
    <MainWrapper>
      <InnerWrapper>
        <Text>A simple danger alert—check it out!</Text>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default DangerBanner;
