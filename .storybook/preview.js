/** @type { import('@storybook/react').Preview } */
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import "./customStyles.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  background-clip: padding-box;
  border: 2px solid transparent;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #ababab;
}

::-webkit-scrollbar-thumb:active {
  background-color: #ababab;
}

.docblock-code-toggle.docblock-code-toggle--expanded {
  /* visibility: hidden; */
}


`;

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
