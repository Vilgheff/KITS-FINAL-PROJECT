import { Banner } from "components/Banner";
import { SeacondBanner } from "components/Banner";
export default {
  title: "Example/SeacondBanner",
  component: SeacondBanner,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};
export const TopSeacondBanner = () => <SeacondBanner></SeacondBanner>