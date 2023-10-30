import "./App.css";
import List from "./components/List.tsx";
import Item from "./components/Item.tsx";
import { useState, ReactNode } from "react";

export default function App() {
  // Folders
  const [currentFolder, setCurrentFolder] = useState(0);

  // Home Folder
  const homeFileNames: string[] = ["About Me"];
  const homeFiles: ReactNode[] = buildItems(homeFileNames, 0);

  // Projects Folder
  const projectsFileNames: string[] = [
    "Droid Invasion",
    "Internet Pen Database",
    "Ultimate Earth Championship",
    "Breakout",
    "Empathese",
  ];
  const projectsFiles: ReactNode[] = buildItems(projectsFileNames, 0);

  // Blog Folder
  const blogFileNames: string[] = ["Post 1"];
  const blogFiles: ReactNode[] = buildItems(blogFileNames, 0);

  // Links Folder
  const linksFileNames: string[] = ["Link 1"];
  const linksFiles: ReactNode[] = buildItems(linksFileNames, 0);

  const folderMap: Map<string, ReactNode[]> = new Map<string, ReactNode[]>();
  folderMap.set("Home", homeFiles);
  folderMap.set("Projects", projectsFiles);
  folderMap.set("Blog", blogFiles);
  folderMap.set("Links", linksFiles);
  const folderNames = Array.from(folderMap.keys());
  const folders: ReactNode[] = buildItems(folderNames, currentFolder);
  function setFolder(folderName: string) {
    if (folderNames.includes(folderName)) {
      setCurrentFolder(folderNames.indexOf(folderName));
    } else {
      setCurrentFolder(0);
    }
  }

  const files: ReactNode[] =
    folderMap.get(folderNames[currentFolder]) || homeFiles;

  function buildItems(names: string[], activeFolder: number) {
    return names.map((name, i) => {
      return (
        <Item
          key={i}
          title={name}
          active={i === activeFolder}
          setFolder={setFolder}
        />
      );
    });
  }

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
