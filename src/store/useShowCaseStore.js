import { produce } from "immer";
import { create } from "zustand";
const data = [
  {
    imgsrc: "../../assets/image-category-1.svg",
    type: "Manto",
    quantity: 86,
    ishot: true,
    issale: false,
  },
  {
    imgsrc: "../../assets/item-category.svg",
    type: "Manto",
    quantity: 86,
    ishot: true,
    issale: false,
  },
  {
    imgsrc: "../../assets/Itemcategory4.svg",
    type: "Manto",
    quantity: 86,
    ishot: true,
    issale: false,
  },
  {
    imgsrc: "../../assets/itemcatagoryy5.svg",
    type: "Manto",
    quantity: 86,
    ishot: true,
    issale: false,
  },
  {
    imgsrc: "../../assets/ItemCategory3.svg",
    type: "Manto",
    quantity: 86,
    ishot: true,
    issale: false,
  },
];
export const useShowCaseStore = create((set) => ({
  listShowCase: data,
  addShowCase: (showcase) =>
    set((state) => ({ listShowCase: [...state.listShowCase, showcase] })),
}));
