import { MdOutlineAccountCircle } from "react-icons/md";
import { ICardData } from "@pages/home/types";

const mockAppCards: ICardData[] = [
  {
    id: "prospects",
    label: "Crédito",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <MdOutlineAccountCircle />,
    url: "/credit",
  },
  {
    id: "card1",
    label: "Card Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <MdOutlineAccountCircle />,
    url: "/home",
  },
  {
    id: "card2",
    label: "Card Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <MdOutlineAccountCircle />,
    url: "/home",
  },
];

export { mockAppCards };
