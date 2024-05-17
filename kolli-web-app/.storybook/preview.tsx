import type { Preview } from "@storybook/react";

import "globals.css";

import React from "react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [],
};

export default preview;
