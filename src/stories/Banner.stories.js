import { Banner } from "components/Banner";
export default {
  title: "Example/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};
export const TopBanner = () => <Banner></Banner>