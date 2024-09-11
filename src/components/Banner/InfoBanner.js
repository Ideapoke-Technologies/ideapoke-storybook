"use client";

// Import Library
import React from "react";
import styled from "styled-components";
import OutlineButton from "../Button/OutlineButton";


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
  background-color: #e1edff;
  border: 1px solid #e1edff;
  padding: 0px 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
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
  color: #2475c0;
`;

const InfoBanner = () => {
  return (
    <MainWrapper>
      <InnerWrapper>
        <Text>A simple primary alert—check it out!</Text>
        <OutlineButton>Cancel</OutlineButton>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default InfoBanner;
