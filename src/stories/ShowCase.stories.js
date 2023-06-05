import { ShowCase } from "components/ShowCase";
import ShowCaseImg from "../assets/image-category-1.svg";
export default {
  title: "Example/ShowCase",
  component: ShowCase,
  tags: ["autodocs"],
};
export const ShowCaseTest = () => <ShowCase imgSrc={ShowCaseImg} width="648px" height="648px" isHot={true} isSale={true}></ShowCase>
