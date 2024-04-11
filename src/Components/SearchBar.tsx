import handleSearch from "../utils/search";
import '../searchBar.css'

interface SearchBarProps {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setResults: React.Dispatch<React.SetStateAction<any[]>>
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, setResults }) => {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search for a term..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="searchButton"
        onClick={() => handleSearch(searchTerm, setResults)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar
