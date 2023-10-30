import "./List.css";
import { ReactNode } from "react";

interface ItemProps {
  items: ReactNode[];
}

export default function List({ items }: ItemProps) {
  const children: ReactNode[] = items.map((item, i) => (
    <div key={i}>
      {i === 0 ? (
        <div key={i * 2 + 1}>{item}</div>
      ) : (
        [<hr key={i * 2}></hr>, <div key={i * 2 + 1}>{item}</div>]
      )}
    </div>
  ));
  return <div className="list">{children}</div>;
}
