// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import FavoriteList from "./components/FavoriteList";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (searchTerm = "a") => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const textData = await res.text();
      const jsonData = textData ? JSON.parse(textData) : null;
      setData(jsonData?.drinks || []);
    } catch (error) {
      console.error(error);
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-500 font-bold">
        {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-gray-500 font-bold">
        No results found.
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar fetchData={fetchData} />
      <Routes>
        <Route
          path="/"
          element={<Applayout data={data} fetchData={fetchData} />}
        />
        <Route path="/favorite" element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
