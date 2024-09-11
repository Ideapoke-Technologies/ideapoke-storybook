import OutlineButton from "@/components/Button/OutlineButton";

export default {
  title: "Components/Button/OutlineButton",
  component: OutlineButton,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `

import React from 'react'
import styled from 'styled-components';


const OutlineBtn = styled.button.attrs({
  type: "button",
})\`
  width: \${({ width }) => width || "95px"};
  height: \${({ height }) => height || "32px"};
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
\`;

const OutlineButton = () => {
  return <OutlineBtn>Button</OutlineBtn>;
}

export default OutlineButton


        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <OutlineButton />;
