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
        <form
          className="flex ring-1 justify-between rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            className="outline-none ps-2 bg-inherit text-white"
            type='search'
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            spellCheck="true"
            required
          />
          <SearchIcon fontSize="large" className='p-1'/>
        </form>
    );
}

export default Search