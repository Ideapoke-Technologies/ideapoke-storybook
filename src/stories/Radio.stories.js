import Radio from "@/components/Forms/Radio";

export default {
  title: "Components/Forms/Radio",
  component: Radio,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `



import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input\`
  border: 1px solid white;
  box-shadow: 0 0 0 1px #cbcbcb;
  appearance: none;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: #fff;
  transition: all ease-in 0.2s;
  margin: 0 3px;

  &:checked {
    background-color: #2970b1;
    outline: 1px solid #2970b1;
  }

  &:hover {
    cursor: pointer;
  }
\`;

const InputItem = styled.div\`
  display: flex;
  align-items: center;
\`;

export default function Radio(props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <InputItem>
        <Input
          type="radio"
          name="radio"
          checked={isChecked}
          onClick={handleRadioChange}
        />
      </InputItem>
    </div>
  );
}
        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <Radio />;
