import React, { useState, useEffect } from "react";
import Article from "./article.jsx";
import axios from "axios";

export default function Featured() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/featured")
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => console.log("Error fetching data!"));
  }, []);

  return (
    <>
      {results.map((res) => (
        <Article key={res.id} {...res}/>
      ))}
    </>
  );
}
