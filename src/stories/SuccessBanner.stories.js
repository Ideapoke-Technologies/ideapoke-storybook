import SuccessBanner from "@/components/Banner/SuccessBanner";
import styled from "styled-components";

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export default {
  title: "Components/Banner/SuccessBanner",
  component: SuccessBanner,
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


import React from "react";
import styled from "styled-components";

// CSS-in-JS
const MainWrapper = styled.div\`
  position: fixed;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999999;
  max-width: 775px;
\`;

const InnerWrapper = styled.div\`
  background-color: #dcfce7;
  border: 1px solid #dcfce7;
  padding: 0px 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s, border 0.5s;
  border-radius: 4px;
  box-shadow: -16px 8px 30.9px 0px #00000040;

  span {
    font-weight: 600;
  }
\`;

const Text = styled.p\`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #0c672b;
\`;

const SuccessBanner = () => {
  return (
    <MainWrapper>
      <InnerWrapper>
        <Text>
          A simple success alert — <span>check it out!</span>{" "}
        </Text>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default SuccessBanner;

        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <SuccessBanner />;
