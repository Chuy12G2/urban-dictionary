import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const handleSearch = async (searchTerm: string, setResults: React.Dispatch<React.SetStateAction<any[]>>) => {

    const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: searchTerm },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_HOST,
    },
  };

  try {
    const res = await axios.request(options);
    console.log(res.data.list);
    setResults(res.data.list);
  } catch (error) {
    console.error(error);
  }
};

export default handleSearch;
