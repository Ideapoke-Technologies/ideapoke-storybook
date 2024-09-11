"use client";

import React from 'react'
import styled from 'styled-components';
import Send from "./images/send-image.svg"
import Image from 'next/image';

const InputField = styled.input`
  border: 1.57px solid #D3D3D3;
  outline: none;
  width: 265px;
  border-radius: 7px;
  padding: 15px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: #454545;
  padding-right: 55px;

  &::placeholder {
    color: rgba(126, 126, 126, 1);
    font-size: 12.28px;
  }
  &:active {
    border: 0.44px solid #ff7624;
  }
  &:focus {
    border: 0.44px solid #ff7624;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 180px;
  }
`;
const SearchWrap = styled.div`
  position: relative;
  cursor: pointer;
  top: 9px;
  width: 325px;
`;
const SendWrap = styled.div`
  position: absolute;
  top: 8px;
  right: 1px;
  border-left: 1px solid #d3d3d3;
  padding-left: 15px;
  height: 34px;
`;


export default function ChatField() {
  return (
    <div>
      <SearchWrap>
          <InputField placeholder='Type here'></InputField>  
            <SendWrap>
                <Image src={Send} alt='Send Icon' width={30}></Image>
            </SendWrap> 
      </SearchWrap>
    </div>
  )
}
