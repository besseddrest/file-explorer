import logo from './logo.svg';
import './App.css';
import explorerData from './data/data';
import './styles/styles.scss';
import { useState } from 'react';
import { Folder } from './components/Folder';

function App() {
  const [folderData, setFolderData] = useState(explorerData);
  
  return (
    <div className="App">
      <div className="file-explorer__wrap">
        <Folder folders={ folderData }/>
      </div>
    </div>
  );
}

export default App;
