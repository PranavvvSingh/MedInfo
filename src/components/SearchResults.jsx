import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Article from "./article.jsx";
import Pagination from "./Pagination.jsx";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import NoResults from "./NoResults.jsx";
import BeatLoader from "react-spinners/BeatLoader.js";
import { useQuery } from "@tanstack/react-query";

async function fetchData(fullUrl,offset = 0) {
  const response = await axios.get(`${fullUrl}/${offset}`);
  return response.data.results;
}

export default function SearchResults() {
  const { searchText } = useParams();
  const fullUrl = "http://localhost:8081/search" + "/" + searchText;
  const [offset, setOffset] = useState(0);
  const { data:results, error, isLoading } = useQuery({
    queryKey: ["search", searchText, offset],
    queryFn: ()=>fetchData(fullUrl,offset),
  });

  if (isLoading)
    return (
      <div className="flex h-96 items-center justify-center gap-2">
        <BeatLoader color="#1d4ed8" />
      </div>
    );
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (results.length !== 0) {
    return (
      <>
        <p className="w-9/12 my-3 mx-auto text-xl">
          <SearchIcon />
          Search results for "<span className="capitalize">{searchText}</span>"
        </p>
        {results.map((res) => (
          <Article key={res.id} {...res} />
        ))}
        <Pagination offset={offset} setOffset={setOffset} />
      </>
    );
  } else if(results.length===0 && offset==0){
    return <NoResults searchText={searchText} />;
  } else setOffset(0)

}
