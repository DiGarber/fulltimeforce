import { useState, useEffect } from "react";

import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { useNavigate } from "react-router";

import "../../css/style.css";
import { fetchCommits } from "../../utils/http";

const CommitList = () => {
  const [commits, setCommits] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const data = fetchCommits();
      setCommits(data);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  return (
    <div className="container">
      {commits?.map((commit, i) => (
        <p key={i}>{commit}</p>
      ))}
    </div>
  );
};

export default CommitList;
