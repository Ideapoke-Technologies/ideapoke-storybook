import Tabs from "@/components/Tabs/Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],

  parameters: {
    docs: {
      source: {
        code: `

import React, { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div\`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
\`;

const TabList = styled.div\`
  display: flex;
  cursor: pointer;
\`;

const Tab = styled.div\`
  flex: 1;
  padding: 10px 20px;
  background-color: \${(props) => (props.active ? "#FF5C00" : "#f1f1f1")};
  color: \${(props) => (props.active ? "#fff" : "#000")};
  text-align: center;
  border-radius: 5px 5px 0 0;
  transition: background-color 0.3s ease;

  &:not(:last-child) {
    margin-right: 2px;
  }
\`;

const TabContent = styled.div\`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 0 5px 5px 5px;
  background-color: #f9f9f9;
\`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <MainWrapper>
      <TabList>
        <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Tab 1
        </Tab>
        <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
          Tab 2
        </Tab>
      </TabList>

      <TabContent>
        {activeTab === 1 && (
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        )}
        {activeTab === 2 && (
          <div>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </div>
        )}
      </TabContent>
    </MainWrapper>
  );
};

export default Tabs;
        `,
        language: "jsx",
      },
    },
  },
};

export const Default = () => <Tabs />;
