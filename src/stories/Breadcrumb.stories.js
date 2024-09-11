import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default {
  title: "Components/Breadcrumbs/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `

import React from 'react'
import styled from 'styled-components';
import Next from "./images/next.svg"
import Image from 'next/image';

const MainWrapper = styled.div\`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.83px;
  text-align: left;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
\`;

export default function Breadcrumb() {
  return (
    <div>
      <MainWrapper>
        <span style={{ color: "#2475C0", cursor: "pointer" }}>Dashboard</span>
        <Image src={Next} alt="NextBedcrum"></Image>
        <span style={{ color: "#8C8C8C" }}> Data </span>
      </MainWrapper>
    </div>
  );
}
        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <Breadcrumb />;
