"use client";


import styled from "styled-components";
import React from "react";


const MainWrapper = styled.div`
  background: #e6f4fb;
  display: inline-flex;
  padding: 10px;
  border-radius: 50%;
`;

const Spinner = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e6f4fb;
  border: 3px solid;
  border-color: transparent;
  border-right-color: #249ed9;
  animation: spinner-animation 1s infinite linear;

  @keyframes spinner-animation {
    to {
      transform: rotate(1turn);
    }
  }
`;

const BasicSpinner = () => {
  return (
    <MainWrapper>
      <Spinner />
    </MainWrapper>
  );
};

export default BasicSpinner;
