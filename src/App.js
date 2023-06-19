import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { MovieStars } from "./pages/MovieStars";
import { Error404 } from "./pages/Error404";
// import { Navbar } from "../src/components/navbar/Navbar";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((userData) => {
        setUsers(userData.results);
        setSearchResults(userData.results);
      });
    // .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <Navbar users={users} setSearchResults={setSearchResults} />{" "}
      {/* Update this line */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              setUsers={setUsers}
              loading={loading}
              setLoading={setLoading}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/moviestars"
          element={
            <MovieStars
              users={users}
              setUsers={setUsers}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
