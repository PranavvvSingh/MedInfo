import SearchOff from "@mui/icons-material/SearchOffOutlined";

export default function NoResults({ searchText }) {
  return (
    <div className="h-96 flex justify-center items-center">
      <p className="text-2xl">
        <SearchOff fontSize="lg" /> No results found for "{searchText}"
      </p>
    </div>
  );
}