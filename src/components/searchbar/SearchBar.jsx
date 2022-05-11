import './searchbar.css';
import { GiMagnifyingGlass } from 'react-icons/gi';

const SearchBar = ({ filterBy, setFilterBy }) => {
  return (
    <div className='searchbar-container'>
      <div className='input-button-container'>
        <input
          type='text'
          placeholder='Enter project name'
          onChange={(e) => setFilterBy(e.target.value)}
          value={filterBy}
        />
        <span className='magnifying'>
          <GiMagnifyingGlass />
        </span>
        <button>Assets List</button>
      </div>
    </div>
  );
};

export default SearchBar;
