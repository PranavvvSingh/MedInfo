import React, {useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';

export function Search(){
  const navigate=useNavigate();
  const [searchText, setSearchText] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      setSearchText("");
      navigate("search/"+searchText);
      // window.location.href = "http://localhost:5173/" + "search/" + searchText;
    }
    
    return (
      <div className="border border-blue-600 rounded-lg">
        <form className="flex items-stretch" onSubmit={handleSubmit}>
          <input
            className="px-3 bg-inherit text-white"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            spellCheck="true"
            required
          />
          <SearchIcon fontSize="large" className="text-blue-700" />
        </form>
      </div>
    );
}

export default Search