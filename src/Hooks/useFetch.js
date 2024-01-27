import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url, customParams = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { page, query, id } = customParams;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios({
          method: "GET",
          baseURL: "https://api.themoviedb.org/3/",
          url: url,
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            ...customParams,
          },
        });
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query, url]);

  return [data, loading, error];
};

export default useFetch;
