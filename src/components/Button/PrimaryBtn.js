import React from 'react'
import styled from 'styled-components';


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

const PrimaryBtn = () => {
  return <BaseBtn>Primary</BaseBtn>;
}

export default PrimaryBtn