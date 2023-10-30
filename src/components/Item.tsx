import { Dispatch, SetStateAction } from "react";
import "./Item.css";

interface ItemProps {
  title: string;
  active: boolean;
  setFolder: Function;
}

export default function Item({ title, active, setFolder }: ItemProps) {
  return (
    <button
      onClick={() => setFolder(title)}
      className={active ? "active item" : "item"}
      type="button"
    >
      {title}
    </button>
  );
}
