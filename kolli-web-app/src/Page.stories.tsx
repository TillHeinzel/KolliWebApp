import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

// import { GoingsOnContextDecorator } from "./GoingsOnContextDecorator";
import { Page } from "./Page";

const meta: Meta<typeof Page> = {
  title: "UI/Page",
  component: Page,
  //   decorators: [GoingsOnContextDecorator],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};
