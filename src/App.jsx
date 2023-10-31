import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import SearchResults from "./components/searchResults";
import Layout from "./Layout";
import Popular from "./components/Popular";
import Featured from "./components/Featured";
import { Provider } from "react-redux";
import {store} from './app/store.jsx'
import Bookmarks from "./components/Bookmarks";

function Temp({ heading }) {
  return <h1 className="text-8xl">{heading}</h1>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Popular />} />
      <Route path="featured" element={<Featured />} />
      <Route path="search/:searchText" element={<SearchResults />} />
      <Route path="saved" element={<Bookmarks/>} />
    </Route>
  )
);
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Popular />} />
//         <Route path="/featured" element={<Featured />} />
//         <Route path="search/:searchText" element={<SearchResults />} />
//         <Route path="/saved" element={<Temp heading="saved" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
