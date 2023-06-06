import { NewSletter } from "components/NewSletter";
export default {
  title: "Example/NewSletter",
  component: NewSletter,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};
export const TopNewSletter = () => <NewSletter></NewSletter>