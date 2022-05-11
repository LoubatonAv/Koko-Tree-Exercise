import './App.css';
import TreeView from './components/treeview/TreeView';
import treeViewData from './data.json';
import SearchBar from './components/searchbar/SearchBar';
import { useState } from 'react';

function App() {
  const [filterBy, setFilterBy] = useState('');

  return (
    <div className='App'>
      <div className='container'>
        <div className='treeview-container'>
          <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} data={treeViewData.children} />
          <TreeView filterBy={filterBy} data={treeViewData.children} />
        </div>
      </div>
    </div>
  );
}

export default App;
