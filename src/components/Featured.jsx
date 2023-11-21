import { useQuery } from "@tanstack/react-query";
import BeatLoader from "react-spinners/BeatLoader.js";
import Article from "./Article.jsx";
import axios from "axios";

async function fetchData() {
  const response = await axios.get("http://localhost:8081/featured");
  return response.data.results;
}

export default function Featured() {
  const query = useQuery({
    queryKey: ["featured"],
    queryFn: () => fetchData(),
  });

  if (query.isLoading)
    return (
      <div className="flex h-96 items-center justify-center gap-2">
        <BeatLoader color="#1d4ed8" />
      </div>
    );

  if (query.isError) return <pre>{JSON.stringify(query.error)}</pre>;
  return (
    <>
      {query.data.map((res) => (
        <Article key={res.id} {...res} />
      ))}
    </>
  );
}
