import Drawer from "@/components/Drawer/Drawer";
import styled from "styled-components";

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default {
  title: "Components/Drawer/Drawer",
  component: Drawer,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <CenterWrapper>
        <Story />
      </CenterWrapper>
    ),
  ],

  parameters: {
    docs: {
      source: {
        code: `

import React from 'react'
import styled from 'styled-components';

const InputWrap = styled.input\`
  border: 1px solid #2970b1;
  outline: none;
  background-color: #fff;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #454545;
  width: 510px;
  margin-bottom: 0px;

  &::placeholder {
    color: #acacac;
    font-size: 12px;
  }

  &:hover {
    border: 1px solid #ff7624;
  }

  &:focus {
    border: 1px solid #ff7624;
  }
\`;

export default function InputField() {
  return (
    <div>
      <InputWrap placeholder='Enter Topic Name or Company name here'></InputWrap>
    </div>
  )
}

        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <Drawer />;
