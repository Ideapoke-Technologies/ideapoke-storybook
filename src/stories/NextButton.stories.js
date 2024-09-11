import NextButton from "@/components/Button/NextButton";

export default {
  title: "Components/Button/NextButton",
  component: NextButton,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `

import React, { useState } from "react";
import React from 'react'
import styled from 'styled-components';


const NextBtn = styled.button.attrs({
  type: "button",
})\`
  width: \${({ width }) => width || "156px"};
  height: \${({ height }) => height || "40px"};
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

    &::after {
      content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjIwMDM1IDAuNTk5OTc2TDAuMzYwMzUyIDEuNDk5OThMNC44MDAzNSA1Ljk5OTk4TDAuMzYwMzUyIDEwLjVMMS4yMDAzNSAxMS40TDYuNjAwMzUgNS45OTk5OEwzLjkwMDM1IDMuMjk5OThMMS4yMDAzNSAwLjU5OTk3NloiIGZpbGw9IiNGRjc2MjQiLz4KPC9zdmc+Cg==");
      position: relative;
      top: 2px;
      left: 10px;
    }
  }

  &::after {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjIwMDM1IDAuNTk5OTc2TDAuMzYwMzUyIDEuNDk5OThMNC44MDAzNSA1Ljk5OTk4TDAuMzYwMzUyIDEwLjVMMS4yMDAzNSAxMS40TDYuNjAwMzUgNS45OTk5OEwzLjkwMDM1IDMuMjk5OThMMS4yMDAzNSAwLjU5OTk3NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
    position: relative;
    top: 2px;
    left: 10px;
  }
\`;

const NextButton = () => {
  return <NextBtn>Next</NextBtn>;
}

export default NextButton;


        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <NextButton />;
