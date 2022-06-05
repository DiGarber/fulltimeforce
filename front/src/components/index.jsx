import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Redirect } from "react-router";
import CommitList from "./CommitList/CommitList";

import "../css/style.css";

const Layout = () => {
  const [auth, setAuth] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authx28");
    auth && setAuth(JSON.parse(auth));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CommitList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
