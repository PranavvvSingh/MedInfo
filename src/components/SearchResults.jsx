import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Article from "./article.jsx";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import NoResults from "./NoResults.jsx";
import BeatLoader from 'react-spinners/BeatLoader.js'

export default function SearchResults() {
  const { searchText } = useParams();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const fullUrl = "http://localhost:8081/search" + "/" + searchText;

  useEffect(() => {
    setLoading(true);
    axios
      .get(fullUrl)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => console.log("Error fetching data!"))
      .finally(() => setLoading(false));
  }, [searchText]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center gap-2">
        {/* <svg className="animate-spin w-8 h-8 fill-blue-700" viewBox="3 3 18 18">
          <path
            className="opacity-20"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
        </svg>
        <span className="text-xl">Loading...</span> */}
        <BeatLoader color="#1d4ed8" />
      </div>
    );
  } else {
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
        </>
      );
    } else {
      return <NoResults searchText={searchText} />;
    }
  }
}
