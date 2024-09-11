import Accordion from "@/components/Accordion/Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `


import React, { useState } from "react";
import styled from "styled-components";

// Styled-components
const AccordionContainer = styled.div\`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
\`;

const AccordionHeader = styled.div\`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
\`;

const Chevron = styled.span\`
  transition: transform 0.3s ease;
  &.rotate {
    transform: rotate(180deg);
  }
\`;

const AccordionContent = styled.div\`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 10px;

  &.open {
    max-height: fit-content;
    padding: 10px 10px;
  }
\`;

const AccordionItem = ({ title, children, isOpen, toggleAccordion }) => (
  <AccordionContainer>
    <AccordionHeader onClick={toggleAccordion}>
      <span>{title}</span>
      <Chevron className={isOpen ? "rotate" : ""}>▼</Chevron>
    </AccordionHeader>
    <AccordionContent className={isOpen ? "open" : ""}>
      {children}
    </AccordionContent>
  </AccordionContainer>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <AccordionItem
        title="Accordion 1"
        isOpen={openIndex === 0}
        toggleAccordion={() => toggleAccordion(0)}
      >
        <div>
          <p>Content for accordion 1</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Accordion 2"
        isOpen={openIndex === 1}
        toggleAccordion={() => toggleAccordion(1)}
      >
        <div>
          <h2>Subheading</h2>
          <p>More content for accordion 2</p>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Accordion 3"
        isOpen={openIndex === 2}
        toggleAccordion={() => toggleAccordion(2)}
      >
        <div>
          <p>Even more content for accordion 3</p>
          <a href="#">A link</a>
        </div>
      </AccordionItem>
    </div>
  );
};

export default Accordion;


        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <Accordion />;
