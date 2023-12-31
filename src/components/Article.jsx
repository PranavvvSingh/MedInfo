import BookmarkAddedIcon from "@mui/icons-material/BookmarkAddedSharp";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderSharp";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../features/saved.jsx";

export default function Article({ id, name, description, tags, source, sourceUrl }) {
  const savedPosts = useSelector((state) => state.saved.value);
  const savedStatus = savedPosts.findIndex((obj) => obj.id === id);
  const dispatch = useDispatch();

  function handleClick() {
    if (savedStatus === -1)
      dispatch(add({ id, name, description, tags, source, sourceUrl }));
    else dispatch(remove(id));
  }
  return (
    <motion.div
      initial={{ opacity: 0, y:-20 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.6 }}
      className="w-9/12 border border-blue-950 hover:border-blue-400 mx-auto pt-3 pb-4 px-4 m-3 rounded-lg"
    >
      <div className="flex justify-between">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl cursor-pointer text-white mb-2"
          >
            {name}
          </a>
        {savedStatus !== -1 && (
          <BookmarkAddedIcon className="cursor-pointer" onClick={handleClick} />
        )}
        {savedStatus === -1 && (
          <BookmarkIcon className="cursor-pointer" onClick={handleClick} />
        )}
      </div>
      <p className="text-blue-300">
        Source:{" "}
        <i>
          {source.name} ({source.acronym})
        </i>
      </p>
      <p className="text-neutral-400 text-justify">{description}</p>
      {tags.length > 0 && (
        <div className="flex gap-2 pt-1 overflow-x-auto">
          {tags.map((tag) => (
            <button
              key={crypto.randomUUID()}
              className="bg-blue-500 opacity-90 rounded py-0.5 px-2 cursor-default whitespace-nowrap text-sm"
            >
              {tag.name}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
