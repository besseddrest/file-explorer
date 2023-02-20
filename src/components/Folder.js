import { useState } from "react";

export const Folder = ({ folders }) => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleAddNode = (ev, isFolder) => {
    ev.stopPropagation();

    setShowInput({
      visible: true,
      isFolder,
    });
  }

  const handleToggleFolder = (ev) => {
    setIsFolderOpen(!isFolderOpen);
  }

  if (folders.isFolder) {
    return (
      <>
        <div className="folder" onClick={(ev) => handleToggleFolder()}> 
          <div>🗂 { folders.name }</div>
          <div className="folder__actions">
            <button onClick={(ev) => handleAddNode(ev, true)}>Folder +</button>
            <button onClick={(ev) => handleAddNode(ev, false)}>File +</button>
          </div>
        </div>
        <div className="folder__items" style={{ display: isFolderOpen ? "block" : "none" }}>
          {
            showInput.visible 
              ? <div className="folder__new-item">
                  <span>{ showInput.isFolder ? "🗂" : "📄"}</span>
                  <input onBlur={ () => setShowInput({ visible: false, isFolder: null }) } type="text" value="" />
                </div> 
              : null
          }
          { folders.items.map((item, i) => <Folder key={i} folders={item} /> )}
        </div>
      </>
    )
  }
  return (
    <div className="file">📄 { folders.name }</div>
  )
}