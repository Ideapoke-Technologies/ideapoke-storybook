"use client";

// Import Libraries
import React from "react";
import styled, { keyframes } from "styled-components";


// Keyframes for the shimmer effect
const placeHolderShimmer = keyframes`
  0% {
    transform: translateZ(0);
    background-position: -468px 0;
  }
  100% {
    transform: translateZ(0);
    background-position: 468px 0;
  }
`;

// CSS-in-JS
const MainWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
`;
const LoaderWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-top: ${(props) => (props.margintop ? props.margintop : 0)}px;
  margin-left: ${(props) => (props.marginleft ? props.marginleft : 0)}px;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 3)}px;
  background: #e6e6e6;
  background: linear-gradient(90deg, #eee 8%, #ddd 18%, #eee 33%);
  background-size: 800px 104px;
  position: relative;
  margin-bottom: 10px;
  animation: ${placeHolderShimmer} 3s linear infinite forwards;
  will-change: transform;
  -webkit-backface-visibility: hidden;
`;
const SpaceWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;

const SkeletonLoader = ({ width }) => {
  return (
    <div>
      <MainWrapper>
        <SpaceWrapper>
          <LoaderWrapper
            width={width || 700}
            height={20}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 650}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 450}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 350}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
        </SpaceWrapper>

        <SpaceWrapper>
          <LoaderWrapper
            width={width || 700}
            height={20}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 650}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 450}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 350}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
        </SpaceWrapper>

        <SpaceWrapper>
          <LoaderWrapper
            width={width || 700}
            height={20}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 650}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 450}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 350}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
        </SpaceWrapper>

        <SpaceWrapper>
          <LoaderWrapper
            width={width || 700}
            height={20}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 650}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 450}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
          <LoaderWrapper
            width={width || 350}
            height={15}
            borderRadius={3}
          ></LoaderWrapper>
        </SpaceWrapper>
      </MainWrapper>
    </div>
  );
};

export default SkeletonLoader;
