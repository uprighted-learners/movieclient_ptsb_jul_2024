import { useState } from "react";

import "./App.css";
import Auth from "./components/Auth";
import MovieIndex from "./components/MovieIndex";
import { Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const updateToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth updateToken={updateToken} />} />
        <Route path="/movie" element={<MovieIndex token={token}/>} />
      </Routes>
    </>
  );
}

export default App;
