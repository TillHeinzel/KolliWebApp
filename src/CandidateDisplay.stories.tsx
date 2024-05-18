import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { CandidateDisplay } from "./CandidateDisplay";

const meta: Meta<typeof CandidateDisplay> = {
  title: "UI/CandidateDisplay",
  component: CandidateDisplay,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Puma2: Story = {
  args: {
    nrOfCollis: 100,
    products: [
      { name: "Puma Black M", sold: 400, unsold: 0, inColli: 4 },
      { name: "Puma Black L", sold: 600, unsold: 0, inColli: 6 },
    ],
  },
};

export const Nike4: Story = {
  args: {
    nrOfCollis: 100,
    products: [
      { name: "Nike Blue M", sold: 643, unsold: 15, inColli: 6 },
      { name: "Nike Blue L", sold: 462, unsold: 27, inColli: 4 },
      { name: "Nike Blue XL", sold: 123, unsold: 5, inColli: 1 },
      { name: "Nike Blue XXL", sold: 401, unsold: 20, inColli: 4 },
    ],
  },
};
