import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CommitList from "./CommitList/CommitList";

import "../css/style.css";

const Index = () => {
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

export default Index;
