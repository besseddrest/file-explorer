import { useState } from "react";

export const Folder = ({ folders }) => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const handleAddFolder = () => {
    // TODO
  }

  const handleAddFile = () => {
    // TODO
  }

  if (folders.isFolder) {
    return (
      <>
        <div className="folder" onClick={() => setIsFolderOpen(!isFolderOpen)}> 
          <div>🗂 { folders.name }</div>
          <div className="folder__actions">
            <button>Folder +</button>
            <button>File +</button>
          </div>
        </div>
        <div className="folder__items" style={{ display: isFolderOpen ? "block" : "none" }}>
          { folders.items.map((item, i) => <Folder key={i} folders={item} /> )}
        </div>
      </>
    )
  }
  return (
    <div className="file">📄 { folders.name }</div>
  )
}