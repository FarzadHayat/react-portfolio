import "./App.css";
import List from "./components/List.tsx";
import Item from "./components/Item.tsx";
import { ReactNode } from "react";

function buildItems(names: string[]) {
  return names.map((name, i) => {
    return <Item key={i} title={name} active={i === 0} />;
  });
}

export default function App() {
  const folderNames: string[] = ["Home", "Projects", "Blog", "About", "Links"];
  buildItems(folderNames);
  const folders: ReactNode[] = [
    <Item title="Home" active={true} />,
    <Item title="Projects" active={false} />,
    <Item title="Blog" active={false} />,
    <Item title="About" active={false} />,
    <Item title="Links" active={false} />,
  ];

  const homeFiles: ReactNode[] = [
    <Item title="Home" active={false} />,
    <Item title="Projects" active={false} />,
    <Item title="Blog" active={false} />,
    <Item title="About" active={false} />,
    <Item title="Links" active={false} />,
  ];

  const files: ReactNode[] = homeFiles;

  return (
    <div className="app">
      <header>
        <h1>Farzad Hayat</h1>
      </header>
      <List items={folders} />
      <List items={files} />
      <div></div>
    </div>
  );
}
