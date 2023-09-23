import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = queryTerm
    ? `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`
    : `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}`;
  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      const responce = await fetch(url);
      const fetchData = await responce.json();
      setData(fetchData);
      setLoading(false);
    };

    fetchMovie();
  }, [url]);

  return { data, loading };
};

export default useFetch;
