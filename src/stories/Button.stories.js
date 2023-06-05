import { Button } from "components/Button";
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <Button {...args}>Button</Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  bgColor: "white",
  textColor: "purple",
  boderColor: "purple",
};

export const BlackButton = {
  args: {
    label: "Button",
    bgColor: "black",
    textColor: "white",
  },
};

export const RedButton = {
  args: {
    label: "Red Button",
    bgColor: "white",
    textColor: "red",
    boderColor: "red",

  },
};
const Temp = (args) => <Button {...args}>Account</Button>;
export const accountButton = Temp.bind({});
accountButton.args = {
  bgColor: "transparent",
  textColor: "black",
  boderColor: "transparent",
};
