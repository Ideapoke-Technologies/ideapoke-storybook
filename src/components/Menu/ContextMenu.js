"use client";

import React from "react";
import styled from "styled-components";
import History from "./images/history.svg";
import Download from "./images/download.svg";
import Image from "next/image";

const Wrapper = styled.div`
  position: relative;
`;
const FilterWrapper = styled.div`
  border: 1px solid #bddfff;
  box-shadow: 16px 30px 19.5px 0px #45454526;
  border-radius: 4px;
  background-color: #fff;
  min-height: 72px;
  position: absolute;
  width: 200px;
`;
const FilterTxt = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
`;
const FilterFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 18px;
  cursor: pointer;

  &:hover {
    background-color: #dceeff;
  }

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;

export default function ContextMenu() {
  return (
    <div>
      <Wrapper>
        <FilterWrapper>
          <FilterFlex>
            <Image src={History} alt="history"></Image>
            <FilterTxt>History</FilterTxt>
          </FilterFlex>
          <FilterFlex>
            <Image src={Download} alt="download"></Image>
            <FilterTxt>Download</FilterTxt>
          </FilterFlex>
        </FilterWrapper>
      </Wrapper>
    </div>
  );
}
