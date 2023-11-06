import React from 'react'
import LeftIcon from "@mui/icons-material/NavigateBeforeSharp";
import RightIcon from "@mui/icons-material/NavigateNextSharp";

const Pagination = ({offset,setOffset}) => {
  return (
    <div className="flex justify-between w-1/12 mx-auto mt-10 mb-5 items-center">
      <button
        className={` py-1 border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:white ${offset===0?'invisible':''}`}
        onClick={() => setOffset(offset - 10)}
      >
        <LeftIcon />
        {/* Prev */}
      </button>
      <p className="rounded-xl text-lg px-3 py-1 bg-blue-700">
        {offset === 0 ? 1 : offset / 10 + 1}
      </p>
      <button
        className=" py-1 border-2 border-blue-700 rounded-3xl hover:bg-blue-700 hover:text-white"
        onClick={() => setOffset(offset + 10)}
      >
        {/* Next */}
        <RightIcon />
      </button>
    </div>
  );
}

export default Pagination