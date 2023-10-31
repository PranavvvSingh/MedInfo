import React from "react";
import Viral from "@mui/icons-material/LocalFireDepartment";
import BookmarkIcon from "@mui/icons-material/BookmarkAdded";
import Featured from "@mui/icons-material/BarChart";
import Search from "./Search";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="z-50 sticky top-0 border-b border-blue-800">
      <div className="flex justify-between p-2 items-center text-fuchsia-100">
        <div className="flex gap-x-2 text-lg">
          <NavLink
            to="/featured"
            className={({ isActive }) =>
              "hover:text-blue-700 " + (isActive ? "text-blue-600" : "")
            }
          >
            <Featured />Featured
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              "hover:text-blue-700 " + (isActive ? "text-blue-600" : "")
            }
          >
            <Viral />Popular
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              "hover:text-blue-700 " + (isActive ? "text-blue-600" : "")
            }
          >
            <BookmarkIcon /> Saved
          </NavLink>
        </div>

        <div>
          <button
            className="text-4xl bg-blue-600 text-white rounded-md py-1 px-2
          hover:bg-blue-800 heading font-bold"
          >
            MedInfo
          </button>
        </div>

        <Search />
      </div>
    </nav>
  );
}
