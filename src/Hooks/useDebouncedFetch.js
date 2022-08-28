import { useState, useEffect, useCallback } from "react";
import { debounce } from "underscore";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_DB_API_KEY}`;

const useDebouncedFetch = (urlParams, firstFetch) => {
  console.log(process.env);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);
  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const callApi = useCallback(
    debounce((value) => {
      fetchMovies(value);
    }, 1000),
    []
  );

  useEffect(() => {
    if (!urlParams) {
      return;
    }

    setIsLoading(true);
    firstFetch
      ? fetchMovies(`${API_ENDPOINT}${urlParams}`)
      : callApi(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useDebouncedFetch;
