"use client";

import React, { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  position: relative;
`;


const CustomSelectButton = styled.button`
  background-color: #ffffff;
  color: #454545;
  font-weight: 400;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 339px;
  height: 37px;
  padding: 12px 12px 11px 9px;
  border-radius: 4px;
  border: 0.55px solid #2970b1;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

const CustomSelectOptions = styled.ul`
  position: absolute;
  width: 342px;
  top: 40px;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #dceeff;
  border-top: none;
  border-radius: 8px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  box-shadow: 16px 30px 19.5px 0px #45454526;
  font-size: 12px;
  color: #454545;
  z-index: 1;
  display: ${({ isDropdownOpen }) => (isDropdownOpen ? "block" : "none")};
`;

const CustomSelectOption = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dceeff;
    color: #454545;
    cursor: pointer;
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

const Icon = styled.div`
  display: inline-flex;
  align-items: center;
`;

const SelectMenu = () => {
  const [isDropdownOpen, setDropdownIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const toggleDropdown = () => {
    setDropdownIsOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownIsOpen(false);
  };
  return (
    <>
      <MainWrapper>
        <CustomSelectButton onClick={toggleDropdown}>
          {selectedOption}
          <Icon>
            <svg
              width="8px"
              height="4px"
              viewBox="0 0 6 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.86793 0.15296C5.78334 0.0550201 5.66863 4.47868e-07 5.54902 4.37411e-07C5.42941 4.26955e-07 5.3147 0.05502 5.23011 0.15296L2.99728 2.73897L0.764445 0.15296C0.679371 0.0577953 0.565428 0.00513745 0.447157 0.00632786C0.328886 0.00751803 0.21575 0.0624611 0.132117 0.159323C0.0484839 0.256185 0.00104475 0.387217 1.71474e-05 0.524195C-0.00101045 0.661174 0.0444555 0.79314 0.126623 0.891671L2.67837 3.84704C2.76295 3.94498 2.87767 4 2.99728 4C3.11689 4 3.2316 3.94498 3.31619 3.84704L5.86793 0.891671C5.9525 0.793702 6 0.660845 6 0.522316C6 0.383787 5.9525 0.25093 5.86793 0.15296Z"
                fill="#2970B1"
              />
              <path
                d="M5.86793 0.15296C5.78334 0.0550201 5.66863 4.47868e-07 5.54902 4.37411e-07C5.42941 4.26955e-07 5.3147 0.05502 5.23011 0.15296L2.99728 2.73897L0.764445 0.15296C0.679371 0.0577953 0.565428 0.00513745 0.447157 0.00632786C0.328886 0.00751803 0.21575 0.0624611 0.132117 0.159323C0.0484839 0.256185 0.00104475 0.387217 1.71474e-05 0.524195C-0.00101045 0.661174 0.0444555 0.79314 0.126623 0.891671L2.67837 3.84704C2.76295 3.94498 2.87767 4 2.99728 4C3.11689 4 3.2316 3.94498 3.31619 3.84704L5.86793 0.891671C5.9525 0.793702 6 0.660845 6 0.522316C6 0.383787 5.9525 0.25093 5.86793 0.15296Z"
                stroke="#2475C0"
              />
            </svg>
          </Icon>
        </CustomSelectButton>
        <CustomSelectOptions isDropdownOpen={isDropdownOpen}>
          <CustomSelectOption
            onClick={() => handleOptionSelect("Innovation Scouting Map")}
          >
            Innovation Scouting Map
          </CustomSelectOption>
          <CustomSelectOption onClick={() => handleOptionSelect("Trend Map")}>
            Trend Map
          </CustomSelectOption>
          <CustomSelectOption
            onClick={() => handleOptionSelect("Value Chain Analysis")}
          >
            Value Chain Analysis
          </CustomSelectOption>
          <CustomSelectOption
            onClick={() => handleOptionSelect("Technology Landscape")}
          >
            Technology Landscape
          </CustomSelectOption>
        </CustomSelectOptions>
      </MainWrapper>
    </>
  );
};

export default SelectMenu;
