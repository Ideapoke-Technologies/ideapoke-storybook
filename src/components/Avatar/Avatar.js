"use client";

import React from "react";
import styled from "styled-components";

const CurrentAvatar = styled.div`
  width: 30px;
  height: 30px;
  border: 1.02px solid #a8a8a8;
  background-color: #eff6fe;
  color: #454545;
  font-size: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = () => {
  return (
    <>
      <CurrentAvatar>S</CurrentAvatar>
    </>
  );
};

export default Avatar;
