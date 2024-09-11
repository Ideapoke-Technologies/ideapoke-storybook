"use client";
// Import Libraries
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactModal from "react-modal";
import Image from "next/image";

// Image Imports
import CloseImage from "./images/remove-line.svg";
import Bg from "./images/popup-bg.png";

// CSS Imports
import "./PopupModal.css";



// CSS-in-JS
const GlobalStyle = createGlobalStyle`
    .ReactModal__Overlay {
    background-color: rgba(88,79,79,.788)!important;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: scale(1);
    overflow-y: auto;
    z-index: 99999 !important;
  }

    .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateY(0px);
 }

`;

const ModalWrapper = styled(ReactModal)`
  position: relative;
  background: #fff;
  border: 1px solid #ccc;
  margin: 0 auto;
  border-radius: 12px;
  outline: none;
  animation: slide 0.5s forwards 0.5s;
  overflow: hidden;
  margin-top: 7%;

  @keyframes slide {
    100% {
      right: 0;
    }
  }
`;

const CloseImg = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 10px;
  border-radius: 50px;
  height: 18px;
  width: 18px;
  &:hover {
    cursor: pointer;
    background-color: #e3f2ff;
    border-radius: 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 35px;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #ff000d;
  margin-top: 12px;
`;
const Text2 = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
  text-align: center;
  color: #000000;
  margin-top: 15px;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
`;

const SubText = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 26px;
  text-align: center;
  color: #000;
  margin-top: 10px;
`;
const ImageBg = styled.div`
  position: absolute;
  top: 20px;
  left: 24px;
`;
const ImageBg1 = styled.div`
  position: absolute;
  bottom: 20px;
  right: 24px;
`;

const BaseBtn = styled.button.attrs({
  type: "button",
})`
  width: ${({ width }) => width || "80px"};
  height: ${({ height }) => height || "40px"};
  border-radius: 47px;
  background-color: #454545;
  border: 1px solid #454545;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000000;
    border: 1px solid #000000;
    color: #ff7624;
  }
`;

const OutlineBtn = styled.button.attrs({
  type: "button",
})`
  width: ${({ width }) => width || "95px"};
  height: ${({ height }) => height || "32px"};
  border-radius: 47px;
  background-color: transparent;
  border: 1px solid #000000;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #454545;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border 0.3s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid #ff7624;
    color: #ff7624;
  }
`;

export default function Popup(props) {
  const [isOpen, setisOpen] = useState(true);
  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <div>
      <GlobalStyle />
      <ModalWrapper
        isOpen={isOpen}
        onRequestClose={() => handleClose()}
        ariaHideApp={false}
        className="modal-popup-Delete"
      >
        <CloseImg onClick={() => handleClose()}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4695 8.95046L17.7595 1.66046C17.9234 1.46916 18.009 1.22308 17.9993 0.971403C17.9895 0.719727 17.8852 0.480988 17.7071 0.302894C17.529 0.124799 17.2903 0.0204662 17.0386 0.0107451C16.7869 0.00102391 16.5408 0.0866304 16.3495 0.250457L9.05954 7.54046L1.76954 0.240457C1.57824 0.0766302 1.33217 -0.00897537 1.08049 0.000745785C0.828814 0.0104669 0.590075 0.114799 0.411981 0.292893C0.233886 0.470988 0.129554 0.709727 0.119832 0.961403C0.110111 1.21308 0.195718 1.45915 0.359544 1.65046L7.64954 8.95046L0.349544 16.2405C0.244862 16.3301 0.159842 16.4404 0.0998186 16.5645C0.0397953 16.6886 0.00606467 16.8237 0.000745179 16.9614C-0.00457431 17.0991 0.0186316 17.2365 0.0689062 17.3648C0.119181 17.4931 0.195439 17.6097 0.292894 17.7071C0.390348 17.8046 0.506896 17.8808 0.635221 17.9311C0.763546 17.9814 0.900878 18.0046 1.0386 17.9993C1.17632 17.9939 1.31145 17.9602 1.43551 17.9002C1.55958 17.8402 1.6699 17.7551 1.75954 17.6505L9.05954 10.3605L16.3495 17.6505C16.5408 17.8143 16.7869 17.8999 17.0386 17.8902C17.2903 17.8804 17.529 17.7761 17.7071 17.598C17.8852 17.4199 17.9895 17.1812 17.9993 16.9295C18.009 16.6778 17.9234 16.4318 17.7595 16.2405L10.4695 8.95046Z"
              fill="#ACACAC"
            />
          </svg>
        </CloseImg>
        <Wrapper>
          <Image src={CloseImage} alt="CloseImage"></Image>
          <Text>Delete the Supporting Point</Text>
          <Text2>
            Are you sure you want to delete this<br></br> Supporting point?
          </Text2>
          <SubText>
            Note: Deleting this Supporting point will exclude it from scenario
            creation
          </SubText>

          <BtnWrap>
            <OutlineBtn
              width="146px"
              height="40px"
              backgroundColor="#fff"
              borderColor="#454545"
              color="#454545"
              hoverBackgroundColor="#fff"
            >
              Cancel
            </OutlineBtn>
            <BaseBtn width="165px" height="40px">
              Yes Proceed
            </BaseBtn>
          </BtnWrap>

          <ImageBg>
            <Image src={Bg} alt="background"></Image>
          </ImageBg>
          <ImageBg1>
            <Image src={Bg} alt="background"></Image>
          </ImageBg1>
        </Wrapper>
      </ModalWrapper>
    </div>
  );
}
