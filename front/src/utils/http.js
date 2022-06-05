import axios from "axios";
const URL = "http://localhost:8080";

export const fetchCommits = async (info) => {
  try {
  const data = await axios.get(`${URL}/commits`, info,{headers: {
    "Content-Type": "application/json",
  }})
  console.log(data)
  return data
  } catch (error) {
    console.log("Error:", error.message);
    alert(error.message);
  }
}; 
