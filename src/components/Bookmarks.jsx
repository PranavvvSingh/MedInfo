import React, { useState, useEffect } from "react";
import Article from "./article.jsx";
import { useSelector } from "react-redux";

export default function Bookmarks() {
  const [results, setResults] = useState([]);
  const data=useSelector((state) => state.saved.value);
  useEffect(() =>{setResults(data)}, [data]);
  
  if(results.length!=0){
    return (
      <>
        {results.map((res) => (
          <Article key={res.id} {...res} />
        ))}
      </>
    );
  }
  else{
    return (
      <div className="h-96 flex justify-center items-center">
        <p className="text-2xl text-center opacity-60">
          It looks like you haven't bookmarked any articles.<br/>
          Save articles for quick access here.
        </p>
      </div>
    );
  }
}
