import CheckBox from "@/components/Forms/CheckBox";

export default {
  title: "Components/Forms/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `

import React, { useState } from "react";
import styled from "styled-components";


const CheckboxContainer = styled.div\`
  display: inline-block;
  vertical-align: middle;
\`;

const Icon = styled.svg\`
  fill: none;
  stroke: white;
  stroke-width: 2px;
\`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })\`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
\`;

const StyledCheckbox = styled.div\`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: \${(props) => (props.checked ? "#2475C0" : "#ffffff")};
  border: 1px solid \${(props) => (props.checked ? "#2475C0" : "#a4a4a4")};
  border-radius: 3px;
  transition: all 150ms;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  \${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px #2475c0;
  }

  \${Icon} {
    visibility: \${(props) => (props.checked ? "visible" : "hidden")};
  }
\`;

const Checkbox = ({ className, checked, onChange, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <label>
      <Checkbox checked={checked} onChange={handleCheckboxChange} />
    </label>
  );
};

export default CustomCheckbox;
        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <CheckBox />;
