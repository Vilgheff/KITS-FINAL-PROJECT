import { Card } from "components/Card";

import ShowCaseImg from "../assets/image-category-1.svg";
export default {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const PrimaryCard = {
    args: {
        name: "Adicolor Classics Joggers",
        type: "Dress",
        price: "$63.85",
        imgSrc: `${ShowCaseImg}`
    },
  };