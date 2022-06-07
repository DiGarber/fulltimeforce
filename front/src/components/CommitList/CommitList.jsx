import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { fetchCommits } from "../../utils/http";

import "../../css/style.css";

const CommitList = () => {
  const [commits, setCommits] = useState(() => []);

  
  const getCommits = useCallback(async () => {
    try {
      const data = await fetchCommits();
      const commitMessages = getCommitsMessages(data.data);
      setCommits(commitMessages);
    } catch (e) {
      alert(e.message);
    }
  }, []);
  const getCommitsMessages = (commitArray = []) => {
    const messages = commitArray.map((commit) => commit?.commit?.message);
    return messages;
  };

  useEffect(() => {
    const asyncGetCommits = async () => {
      await getCommits();
    };
    asyncGetCommits()
  }, [getCommits]);

  return (
    <div className="container">
      <button
        className="btn"
        onClick={async () => {
          await getCommits();
        }}
      >
        Refresh commits!
      </button>
      <ul>
        {commits?.map((commit, i) => (
          <li key={i}>{commit}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommitList;
