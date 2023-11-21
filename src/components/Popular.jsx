import { useState } from "react";
import Article from "./Article.jsx";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BeatLoader from "react-spinners/BeatLoader.js";
import Pagination from "./Pagination.jsx";

async function fetchData(offset=0){
  const response = await axios.get(
    `http://localhost:8081/popular/${offset}`
  );
  return response.data.results;
}
export default function Popular() {
  const [offset, setOffset] = useState(0);

  const query = useQuery({
    queryKey: ["popular", offset],
    queryFn: ()=>fetchData(offset),
  });

  if (query.isLoading)
    return (
      <div className="flex h-96 items-center justify-center gap-2">
        <BeatLoader color="#1d4ed8" />
      </div>
    );

  if (query.isError) return <pre>{JSON.stringify(query.error)}</pre>;
  if(query.data.length==0) setOffset(0)
  return (
    <>
      {query.data.map((res) => (
        <Article key={res.id} {...res} />
      ))}
      <Pagination offset={offset} setOffset={setOffset}/>
    </>
  );
}
