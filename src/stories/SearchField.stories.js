import SearchField from "@/components/Forms/SearchField";

export default {
  title: "Components/Forms/SearchField",
  component: SearchField,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `

import React from 'react'
import styled from 'styled-components';
import SearchImage from "./images/search.png"
import Image from 'next/image';

const InputField = styled.input\`
  border: 0.44px solid rgba(69, 69, 69, 1);
  outline: none;
  width: 265px;
  border-radius: 7px;
  padding: 11px 15px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: #454545;
  padding-right: 45px;

  &::placeholder {
    color: rgba(126, 126, 126, 1);
    font-size: 12.28px;
  }
  &:active {
    border: 0.44px solid #ff7624;
  }
  &:focus {
    border: 0.44px solid #ff7624;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 180px;
  }
\`;
const SearchWrap = styled.div\`
  position: relative;
  cursor: pointer;
  top: 9px;
  width: 325px;
\`;

const IconWrap1 = styled.div\`
  position: absolute;
  top: 12px;
  right: 15px;
\`;



export default function SearchField() {
  return (
    <div>
      <SearchWrap>
        <InputField placeholder='Search Ideapoke Research Platform'></InputField>
        <IconWrap1>
          <Image src={SearchImage} alt='Search Icon'></Image>
        </IconWrap1>            
      </SearchWrap>
    </div>
  )
}
        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <SearchField />;
