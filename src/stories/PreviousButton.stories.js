import PreviousButton from "@/components/Button/PreviousButton";

export default {
  title: "Components/Button/PreviousButton",
  component: PreviousButton,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `

import React from 'react'
import styled from 'styled-components';

const PreviousBtn = styled.button.attrs({
  type: "button",
})\`
  width: \${({ width }) => width || "156px"};
  height: \${({ height }) => height || "40px"};
  background-color: transparent;
  border-radius: 47px;
  border: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #2475c0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #ff7624;
    background-color: #000000;

    &::before {
      content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjgwMDE0IDExLjQwMDRMNi42NDAxNCAxMC41MDA0TDIuMjAwMTQgNi4wMDAzOUw2LjY0MDE0IDEuNTAwMzlMNS44MDAxNCAwLjYwMDM5TDAuNDAwMTM3IDYuMDAwMzlMNS44MDAxNCAxMS40MDA0WiIgZmlsbD0iI0ZGNzYyNCIvPgo8L3N2Zz4K");
      position: relative;
      top: 1px;
      left: -10px;
    }
  }

  &::before {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjgwMDE0IDExLjQwMDRMNi42NDAxNCAxMC41MDA0TDIuMjAwMTQgNi4wMDAzOUw2LjY0MDE0IDEuNTAwMzlMNS44MDAxNCAwLjYwMDM5TDAuNDAwMTM3IDYuMDAwMzlMNS44MDAxNCAxMS40MDA0WiIgZmlsbD0iIzI0NzVDMCIvPgo8L3N2Zz4K");
    position: relative;
    top: 1px;
    left: -10px;
  }
\`;

const PreviousButton = () => {
  return <PreviousBtn>Previous</PreviousBtn>;
}

export default PreviousButton


        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <PreviousButton />;
