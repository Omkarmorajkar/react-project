import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import FavoriteList from "./components/FavoriteList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />} />
        <Route path="/favorite" element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
