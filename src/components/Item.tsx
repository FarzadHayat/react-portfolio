import "./Item.css";

interface ItemProps {
  title: string;
  active: boolean;
}

export default function Item({ title, active }: ItemProps) {
  return (
    <button className={active ? "active item" : "item"} type="button">
      {title}
    </button>
  );
}
