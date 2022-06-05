import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { fetchCommits } from "../../utils/http";

import "../../css/style.css";

const CommitList = () => {
  const [commits, setCommits] = useState([]);

  const getCommits = async() => {
    try {
      const {data} = await fetchCommits();
      const commitMessages = getCommitsMessages(data)
      setCommits(commitMessages);
    } catch (e) {
      alert(e.message);
    }
  }
  const getCommitsB = useCallback(
    async() => {
      try {
        const data = await fetchCommits();
        const commitMessages = getCommitsMessages(data.data)
        setCommits(commitMessages);
      } catch (e) {
        alert(e.message);
      }
    },
    [],
  );
  const getCommitsMessages = (commitArray = []) => {
    const messages = commitArray.map(commit => commit?.commit?.message)
    return messages
  }

  useEffect(() => {
    async function s() {
      await getCommitsB()
    }
    s()
  }); 

  return (
    <div className="container">
      <button onClick={async() => {await getCommits()}}>Show me the commits!</button>
      {commits?.map((commit, i) => (
        <p key={i}>{commit}</p>
      ))}
    </div>
  );
};

export default CommitList;
